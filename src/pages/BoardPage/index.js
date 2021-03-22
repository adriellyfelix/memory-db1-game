import React, { useContext, useEffect, useState } from "react";
import { Container, Card, Text } from "./style";
import GlobalStateContext from "../../Global/GlobalStateContext";
import MemoryCard from "../../components/MemoryCard";

export default function BoardPage() {
  const { states, setters } = useContext(GlobalStateContext);
  const [gameStarted, setGameStarted] = useState(false);

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  useEffect(() => {
    const calculatePlay = async () => {
      await delay(1000);
      const first = states.play[0];
      const second = states.play[1];

      if (first.cardValue === second.cardValue) {
        setters.setScore(states.score + 1);
        const firstPlay = states.memoryCards.findIndex(
          (item) => item.cardNumber === first.cardNumber
        );
        const secondPlay = states.memoryCards.findIndex(
          (item) => item.cardNumber === second.cardNumber
        );

        const newMemoryCards = [...states.memoryCards];

        newMemoryCards[firstPlay] = { ...first, visible: true };
        newMemoryCards[secondPlay] = { ...second, visible: true };

        setters.setMemoryCards(newMemoryCards);
        setters.setPlayStarted(false);
        setters.setPlay([]);
      } else {
        setters.setPlayStarted(false);
        setters.setPlay([]);
      }
    };

    if (states.playStarted) {
      calculatePlay();
    }
  }, [states.playStarted]); //eslint-disable-line

  useEffect(() => {
    if (!gameStarted) {
      const numbers = [];
      const memoryCards = [];

      while (numbers.length < 20) {
        const random = Math.floor(Math.random() * 10) + 1;
        const numberExists = numbers.filter((number) => number === random);

        if (numberExists.length < 2) {
          numbers.push(random);
          memoryCards.push({
            cardNumber: numbers.length,
            cardValue: random,
            visible: false,
          });
        }
      }
      setters.setMemoryCards(memoryCards);
      setGameStarted(true);
    }
  }, [gameStarted]); //eslint-disable-line

  const isMemoryCardVisible = (memoryCard) => {
    const cardInPlay = states.play.filter(
      (play) => play.cardNumber === memoryCard.cardNumber
    );
    return memoryCard.visible || cardInPlay.length > 0;
  };

  return (
    <Container>
      <Card>
        <Text>Nome: {states.player}</Text>
        <Text>Pontuação: {states.score}</Text>
      </Card>
      <Card>
        {states.memoryCards.map((memoryCard) => (
          <MemoryCard
            key={memoryCard.cardNumber}
            cardNumber={memoryCard.cardNumber}
            cardValue={memoryCard.cardValue}
            visible={isMemoryCardVisible(memoryCard)}
            disabled={
              states.play.length === 2 || isMemoryCardVisible(memoryCard)
            }
          />
        ))}
      </Card>
    </Container>
  );
}
