"use client";
import { useState } from "react";
import {
  confirmSignupService,
  resendSignupCodeService,
} from "@/services/LoginService";
import { useRouter } from "next/navigation";
import AuthForm from "@/components/AuthForm";

export default function VerifyEmail() {
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleVerifyEmail = async (
    email: string,
    _password?: string,
    code?: string
  ) => {
    if (!email || !code) {
      setError("Preencha o e-mail e o código.");
      return;
    }

    const response = await confirmSignupService(email, code);
    if (response.success) {
      router.push("/login");
    } else {
      setError(response.message);
    }
  };

  const handleResendCode = async () => {
    if (!email) {
      setError("Digite seu e-mail para receber um novo código.");
      return;
    }

    const response = await resendSignupCodeService(email);
    setMessage(response.message);
  };

  return (
    <AuthForm
      title="Verifique seu e-mail"
      buttonText="Confirmar"
      onSubmit={handleVerifyEmail}
      errorMessage={error}
      successMessage={message}
      linkText="Reenviar código"
      linkAction={handleResendCode}
      showEmail={true}
      showCode={true}
      showPassword={false}
      setEmail={setEmail}
    />
  );
}
