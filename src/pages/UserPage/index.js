import React, { useContext } from "react";
import { Container, Card, Button, Input, Text } from "./style";
import GlobalStateContext from "../../Global/GlobalStateContext";
import { useHistory } from "react-router-dom";

export default function UserPage() {
  const { states, setters } = useContext(GlobalStateContext);
  const history = useHistory();

  const clickButton = (event) => {
    if (!states.player) {
      alert("Informe seu nome para continuar");
      return;
    }
    history.push("/board");
  };
  const changeInput = (event) => {
    setters.setPlayer(event.target.value);
  };

  return (
    <Container>
      <Card>
        <Text>Qual seu nome?</Text>
        <Input type="text" name="player" onChange={changeInput} />
        <Button onClick={clickButton}>Jogar</Button>
      </Card>
    </Container>
  );
}
