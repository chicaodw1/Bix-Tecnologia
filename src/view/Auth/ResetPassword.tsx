"use client";
import { useState } from "react";
import { forgotPasswordService } from "@/services/LoginService";
import { useRouter } from "next/navigation";
import AuthForm from "@/components/AuthForm";

export default function ResetPassword() {
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleForgotPassword = async (email: string) => {
    const response = await forgotPasswordService(email);
    if (response.success) {
      setMessage("Código de redefinição enviado ao seu e-mail.");
      router.push("/new-password");
    } else {
      setError(response.message || "Erro ao enviar código.");
    }
  };

  return (
    <AuthForm
      title="Esqueci minha senha"
      buttonText="Enviar Código"
      onSubmit={handleForgotPassword}
      errorMessage={error}
      successMessage={message}
      linkText="Voltar ao Login"
      linkAction={() => router.push("/")}
      showPassword={false}
    />
  );
}
