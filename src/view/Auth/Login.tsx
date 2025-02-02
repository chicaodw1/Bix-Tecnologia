"use client";
import { useState } from "react";
import { loginService } from "@/services/LoginService";
import { useRouter } from "next/navigation";
import AuthForm from "@/components/AuthForm";

export default function Login() {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (email: string, password?: string) => {
    if (!password) {
      setError("A senha é obrigatória.");
      return;
    }

    const response = await loginService(email, password);
    if (response.success) {
      router.push("/dashboard");
    } else {
      setError(response.message || "Erro ao fazer login");
    }
  };

  return (
    <AuthForm
      title="Acessar o Sistema"
      buttonText="Entrar"
      onSubmit={handleLogin}
      errorMessage={error}
      linkText="Criar Conta"
      linkAction={() => router.push("/register")}
      forgotPasswordText="Esqueceu a senha?"
      forgotPasswordAction={() => router.push("/reset-password")}
    />
  );
}
