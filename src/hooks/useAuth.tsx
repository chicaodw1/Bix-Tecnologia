"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isAuthenticated, logoutService } from "@/services/LoginService";

export function useAuth() {
  const router = useRouter();
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(
    isAuthenticated()
  );

  useEffect(() => {
    if (!isAuthenticated()) {
      router.replace("/");
    } else {
      setIsUserAuthenticated(true);
    }
  }, [router]);

  const handleLogout = () => {
    logoutService();
    router.replace("/");
  };

  return { isUserAuthenticated, handleLogout };
}
