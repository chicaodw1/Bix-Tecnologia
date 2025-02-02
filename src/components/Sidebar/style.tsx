import { Box, Button, Link, Stack } from "@chakra-ui/react";
import styled from "styled-components";

interface SidebarProps {
  isOpen?: boolean;
  isActive?: boolean;
}

export const SidebarContainer = styled(Box)<SidebarProps>`
  background-color: #1a202c;
  color: white;
  width: ${({ isOpen }) => (isOpen ? "250px" : "70px")};
  height: 100vh;
  padding: ${({ isOpen }) => (isOpen ? "20px" : "10px")};
  position: fixed;
  left: 0;
  top: 0;
  transition: width 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
`;

export const SidebarToggle = styled(Button)`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  width: 100%;
  text-align: left;
  margin-bottom: 15px;
  display: flex;
  align-items: end;
  justify-content: end;
  padding: 10px;
  transition: background 0.3s;

  &:hover {
    background: #ffffff19;
  }
`;

export const SidebarNav = styled(Stack)`
  flex-grow: 1;
  margin-top: 20px;
`;

export const SidebarLink = styled(Link)<SidebarProps>`
  display: flex;
  background-color: ${({ isActive }) => (isActive ? "#fff" : null)};
  align-items: center;
  justify-content: center;
  gap: ${({ isOpen }) => (isOpen ? "0" : "10px")};
  text-decoration: none;
  padding: 10px;
  border-radius: 5px;
  transition: background 0.3s ease-in-out;
  color: ${({ isActive }) => (isActive ? "#000" : "#fff")};

  &:hover {
    background: #ffffff19;
  }
`;

export const LogoutButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #e53e3e;
  color: white;
  cursor: pointer;
  padding: 10px;
  width: 100%;
  border-radius: 5px;
  margin-top: 20px;
  transition: background 0.3s ease-in-out;

  &:hover {
    background-color: #c53030;
  }
`;
