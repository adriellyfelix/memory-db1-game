import React from "react";
import GlobalStateContext from "./GlobalStateContext";
import { useState } from "react";

export default function GlobalState(props) {
  const [player, setPlayer] = useState(null);
  const [score, setScore] = useState(0);
  const [play, setPlay] = useState([]);
  const [memoryCards, setMemoryCards] = useState([]);
  const [playStarted, setPlayStarted] = useState(false);

  const states = {
    player,
    score,
    play,
    memoryCards,
    playStarted,
  };

  const setters = {
    setPlayer,
    setScore,
    setPlay,
    setMemoryCards,
    setPlayStarted,
  };

  return (
    <GlobalStateContext.Provider value={{ states, setters }}>
      {props.children}
    </GlobalStateContext.Provider>
  );
}
