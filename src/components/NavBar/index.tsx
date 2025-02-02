"use client";

import { NavBarContainer, NavFlex, NavTitle } from "./styled";

interface NavBarProps {
  isOpen: boolean;
}

export default function NavBar({ isOpen }: NavBarProps) {
  return (
    <NavBarContainer isOpen={isOpen}>
      <NavFlex>
        <NavTitle>Painel Financeiro</NavTitle>
      </NavFlex>
    </NavBarContainer>
  );
}
