import { Input } from "@chakra-ui/react";
import styled from "styled-components";

export const StyledInput = styled(Input)`
  height: 48px;
  border: 1px solid #dcdcdc;
  border-radius: 8px;
  padding: 10px;
  font-size: 16px;
  color: #333;
  width: 100%;
  transition: all 0.3s ease-in-out;

  &:focus {
    border-color: #4b6cb7;
    box-shadow: 0 0 5px rgba(75, 108, 183, 0.5);
    outline: none;
  }

  &::-webkit-calendar-picker-indicator {
    filter: invert(0.5);
    cursor: pointer;
  }
`;
