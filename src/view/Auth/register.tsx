"use client";
import { useState } from "react";
import { registerService } from "@/services/LoginService";
import { useRouter } from "next/navigation";
import AuthForm from "@/components/AuthForm";

export default function Register() {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleRegister = async (email: string, password?: string) => {
    if (!password) {
      setError("A senha é obrigatória.");
      return;
    }

    const response = await registerService(email, password);
    if (response.success) {
      router.push("/verify-email");
    } else {
      setError(response.message || "Erro ao cadastrar");
    }
  };

  return (
    <AuthForm
      title="Criar Conta"
      buttonText="Cadastrar"
      onSubmit={handleRegister}
      errorMessage={error}
      linkText="Já tem conta? Login"
      linkAction={() => router.push("/")}
    />
  );
}
