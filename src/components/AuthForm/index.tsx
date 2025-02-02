"use client";
import { useState } from "react";
import {
  AuthBox,
  Container,
  ErrorMessage,
  StyledButton,
  StyledInput,
} from "./styles";
import { Heading, Image, Text } from "@chakra-ui/react";

interface AuthFormProps {
  title: string;
  buttonText: string;
  onSubmit: (email: string, password?: string, code?: string) => void;
  errorMessage?: string;
  successMessage?: string;
  linkText?: string;
  linkAction?: () => void;
  forgotPasswordText?: string;
  forgotPasswordAction?: () => void;
  showEmail?: boolean;
  showPassword?: boolean;
  showCode?: boolean;
  setEmail?: (email: string) => void;
}

export default function AuthForm({
  title,
  buttonText,
  onSubmit,
  errorMessage,
  successMessage,
  linkText,
  linkAction,
  showEmail = true,
  showPassword = true,
  showCode = false,
  setEmail,
  forgotPasswordText,
  forgotPasswordAction,
}: AuthFormProps) {
  const [email, setLocalEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");

  return (
    <Container>
      <AuthBox borderWidth={1}>
        <Image
          src="/logo.jpg"
          alt="Logo"
          boxSize="100px"
          mb={4}
          mx="auto"
          borderRadius={50}
        />
        <Heading mb={4} color="#182848">
          {title}
        </Heading>

        {showEmail && (
          <StyledInput
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setLocalEmail(e.target.value);
              if (setEmail) setEmail(e.target.value);
            }}
          />
        )}

        {showPassword && (
          <StyledInput
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        )}

        {showCode && (
          <StyledInput
            placeholder="Código de Verificação"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        )}

        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        {successMessage && <Text color="green.500">{successMessage}</Text>}

        {forgotPasswordText && forgotPasswordAction && (
          <Text mb={3}>
            <Text
              as="span"
              color="blue.500"
              cursor="pointer"
              fontWeight="bold"
              onClick={forgotPasswordAction}>
              {forgotPasswordText}
            </Text>
          </Text>
        )}

        <StyledButton onClick={() => onSubmit(email, password, code)}>
          {buttonText}
        </StyledButton>

        {linkText && linkAction && (
          <Text mt={3}>
            <Text
              as="span"
              color="blue.500"
              cursor="pointer"
              fontWeight="bold"
              onClick={linkAction}>
              {linkText}
            </Text>
          </Text>
        )}
      </AuthBox>
    </Container>
  );
}
