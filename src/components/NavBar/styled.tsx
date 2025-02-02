import styled from "styled-components";
import { Box, Flex, Text } from "@chakra-ui/react";

interface NavBarProps {
  isOpen: boolean;
}

export const NavBarContainer = styled(Box)<NavBarProps>`
  margin-left: ${({ isOpen }) => (isOpen ? "250px" : "70px")};
  width: ${({ isOpen }) =>
    isOpen ? "calc(100% - 250px)" : "calc(100% - 70px)"};
  background-color: #f7fafc;
  padding: 16px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  z-index: 1000;
  transition: margin-left 0.3s ease-in-out, width 0.3s ease-in-out;
`;

export const NavFlex = styled(Flex)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavTitle = styled(Text)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #2d3748;
`;
