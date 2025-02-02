"use client";
import { useAuth } from "@/hooks/useAuth";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isUserAuthenticated } = useAuth();

  if (!isUserAuthenticated) {
    return <div>Carregando...</div>;
  }

  return <>{children}</>;
}
