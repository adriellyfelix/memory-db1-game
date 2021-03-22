import styled from "styled-components";
import background from "../../assets/background.png";

const Container = styled.div`
  display: flex;
  background-color: #2a9d8f;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Card = styled.div`
  padding: 30px 20px;
  max-width: 300px;
  max-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 5px solid #264653;
  background: #ffffff;
`;

const Button = styled.button`
  min-width: 200px;
  padding: 5px 30px;
  margin: 4px 0px;
  border-radius: 10px;
`;

const Input = styled.input`
  min-width: 200px;
  padding: 5px 0px;
  margin: 10px 0px;
  border-radius: 10px;
`;

const Text = styled.h4`
  margin-bottom: 30px;
`;

export { Container, Card, Button, Input, Text };
