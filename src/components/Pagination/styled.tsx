import styled from "styled-components";
import { HStack, Button, Text } from "@chakra-ui/react";

export const PaginationContainer = styled(HStack)`
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 16px;
  gap: 8px;
`;

export const PaginationText = styled(Text)`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

export const PaginationButton = styled(Button)`
  padding: 8px;
  border-radius: 6px;
  background-color: #4b6cb7;
  color: white;
  font-size: 14px;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;

  &:hover {
    background-color: #3a5aa6;
  }

  &:disabled {
    background-color: #b0b0b0;
    cursor: not-allowed;
  }

  svg {
    font-size: 20px;
  }
`;
