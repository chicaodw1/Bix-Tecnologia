"use client";
import { Icon, Text } from "@chakra-ui/react";
import { FiHome, FiMenu, FiX, FiLogOut } from "react-icons/fi";
import {
  LogoutButton,
  SidebarContainer,
  SidebarLink,
  SidebarNav,
  SidebarToggle,
} from "./style";
import { usePathname } from "next/navigation";
import { logoutService } from "@/services/LoginService";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const router = usePathname();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    try {
      await logoutService();

      window.location.href = "/";
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };

  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarToggle
        onClick={toggleSidebar}
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={4}>
        {isOpen && <Text fontWeight="bold">Bix Tecnologia</Text>}
        <Icon as={isOpen ? FiX : FiMenu} boxSize={6} />
      </SidebarToggle>

      <SidebarNav>
        <SidebarLink href="/dashboard" isActive={router === "/dashboard"}>
          <Icon as={FiHome} />
          {isOpen && "Home"}
        </SidebarLink>
      </SidebarNav>

      <LogoutButton onClick={handleLogout}>
        {isOpen && <span>Logout</span>}
        <Icon as={FiLogOut} boxSize={6} />
      </LogoutButton>
    </SidebarContainer>
  );
}
