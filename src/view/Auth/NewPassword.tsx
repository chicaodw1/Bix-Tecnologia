"use client";
import { useState } from "react";
import { resetPasswordService } from "@/services/LoginService";
import { useRouter } from "next/navigation";
import AuthForm from "@/components/AuthForm";

export default function NewPassword() {
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const router = useRouter();

  const handleResetPassword = async (
    email: string,
    password?: string,
    code?: string
  ) => {
    if (!password || !code) {
      setError("Preencha a nova senha e o código de verificação.");
      return;
    }

    const response = await resetPasswordService(email, code, password);
    if (response.success) {
      setSuccessMessage(response.message);
      setTimeout(() => router.push("/"), 2000);
    } else {
      setError(response.message);
    }
  };

  return (
    <AuthForm
      title="Redefinir Senha"
      buttonText="Alterar Senha"
      onSubmit={handleResetPassword}
      errorMessage={error}
      successMessage={successMessage}
      showCode={true}
      showPassword={true}
      showEmail={true}
      linkText="Voltar ao Login"
      linkAction={() => router.push("/")}
    />
  );
}
