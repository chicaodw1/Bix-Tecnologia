"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  isAuthenticated,
  loginService,
  logoutService,
} from "@/services/LoginService";

export function useAuthController() {
  const [error, setError] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const login = async (email: string, password: string) => {
    const response = await loginService(email, password);

    if (response.success) {
      router.push("/dashboard");
    } else {
      setError("Credenciais inválidas");
    }
  };

  const logout = () => {
    logoutService();
    router.push("/");
  };

  return {
    login,
    logout,
    isAuthenticated: isClient ? isAuthenticated() : false,
    error,
  };
}
