import { Select } from "@chakra-ui/select";
import styled from "styled-components";

export const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledSelect = styled(Select).attrs({
  variant: "unstyled",
  icon: undefined,
})`
  .chakra-select__icon-wrapper {
    position: relative;
    display: none !important;
  }
  width: 100%;
  height: 48px;
  padding: 10px;
  border: 1px solid #dcdcdc;
  border-radius: 8px;
  background-color: white;
  font-size: 16px;
  color: #333;
  cursor: pointer;

  &::after {
    content: "▼";
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
    font-size: 12px;
    color: #666;
  }

  &:focus {
    border-color: #4b6cb7;
    box-shadow: 0 0 5px rgba(75, 108, 183, 0.5);
    outline: none;
  }

  &::-ms-expand {
    display: none;
  }

  &::-webkit-inner-spin-button,
  &::-webkit-calendar-picker-indicator {
    display: none;
  }
`;
