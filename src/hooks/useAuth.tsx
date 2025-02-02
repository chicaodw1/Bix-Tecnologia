"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isAuthenticated, logoutService } from "@/services/LoginService";

export function useAuth() {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/");
    } else {
      setIsUserAuthenticated(true);
    }
  }, [router]);

  const handleLogout = () => {
    logoutService();
    router.push("/");
  };

  return { isUserAuthenticated, handleLogout };
}
