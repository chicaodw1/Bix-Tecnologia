"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isAuthenticated } from "@/services/LoginService";
import "@/styles/global.css";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/");
    } else {
      setLoading(false);
    }
  }, []);

  if (isLoading) return <p>Carregando...</p>;

  return <>{children}</>;
}
