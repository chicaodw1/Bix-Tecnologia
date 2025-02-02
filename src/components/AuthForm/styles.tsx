import { Box, Button, Input, Text } from "@chakra-ui/react";
import styled from "styled-components";

export const Container = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)),
    url("/financeiro.webp") no-repeat center center/cover;
`;

export const AuthBox = styled(Box)`
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  background: #fff;
  width: 350px;
  text-align: center;
`;

export const StyledInput = styled(Input)`
  background-color: #fff;
  color: #000;
  margin-bottom: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 0.8rem;

  &:focus {
    border-color: #4b6cb7;
    box-shadow: 0 0 5px rgba(75, 108, 183, 0.5);
  }
`;

export const ErrorMessage = styled(Text)`
  color: red;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

export const StyledButton = styled(Button)`
  width: 100%;
  padding: 0.8rem;
  border: none;
  border-radius: 5px;
  background: #4b6cb7;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #3a5aa6;
    transform: scale(1.05);
  }

  &:active {
    background: #2e4c90;
    transform: scale(0.98);
  }
`;
