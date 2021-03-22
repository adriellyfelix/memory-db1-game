import styled from "styled-components";
import background from "../../assets/background.png";

const Container = styled.div`
  background-color: #2a9d8f;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Card = styled.div`
  padding: 20px 20px;
  margin: 10px;
  max-width: 450px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  border: 5px solid #264653;
  background: #ffffff;
`;

const Button = styled.button`
  min-width: 200px;
  padding: 5px 30px;
  margin: 4px 0px;
`;

const Input = styled.input`
  min-width: 200px;
  padding: 5px 0px;
  margin: 10px 0px;
`;

const Text = styled.h4`
  margin-bottom: 30px;
`;

export { Container, Card, Button, Input, Text };
