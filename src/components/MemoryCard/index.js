import React, { useContext } from "react";
import { Mcard } from "./style";
import GlobalStateContext from "../../Global/GlobalStateContext";
import PhotoCard from "../../assets/2.jpg";

export default function MemoryCard({
  cardNumber,
  cardValue,
  visible,
  ...props
}) {
  const { states, setters } = useContext(GlobalStateContext);

  const clickButton = () => {
    if (states.play.length < 2) {
      const play = [...states.play, { cardNumber, cardValue }];
      setters.setPlay(play);
      if (states.play.length === 1) {
        setters.setPlayStarted(true);
      }
    }
  };

  return (
    <Mcard onClick={clickButton} {...props}>
      {visible ? cardValue : <img width="50" src={PhotoCard} />}
    </Mcard>
  );
}
