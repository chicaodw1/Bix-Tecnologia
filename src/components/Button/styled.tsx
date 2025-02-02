import { Button } from "@chakra-ui/react";
import styled from "styled-components";

export const StyledButton = styled(Button)`
  height: 48px;
  padding: 0 24px;
  border-radius: 8px;
  font-weight: bold;
  background-color: #4b6cb7;
  color: white;
  transition: all 0.3s ease-in-out;
  border: none;

  &:hover {
    background-color: #3a5aa6;
    transform: scale(1.05);
  }

  &:active {
    background-color: #2e4c90;
    transform: scale(0.98);
  }
`;
