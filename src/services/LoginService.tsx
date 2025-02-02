import { configureAmplify } from "@/aws-exports";
import {
  signUp,
  signIn,
  signOut,
  fetchAuthSession,
  confirmSignUp,
  resendSignUpCode,
  resetPassword,
  confirmResetPassword,
} from "aws-amplify/auth";

configureAmplify();

export async function loginService(email: string, password: string) {
  try {
    const session = await fetchAuthSession();
    if (session.tokens?.idToken) {
      await signOut();
    }

    await signIn({ username: email, password });

    const newSession = await fetchAuthSession();
    const idToken = newSession.tokens?.idToken?.toString() || null;

    if (idToken) {
      localStorage.setItem("authToken", idToken);
      return { success: true, token: idToken };
    } else {
      return { success: false, message: "Erro ao obter token de autenticação" };
    }
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    return { success: false, message: "Credenciais inválidas" };
  }
}

export function logoutService() {
  localStorage.removeItem("authToken");
  signOut();
}

export function isAuthenticated() {
  return localStorage.getItem("authToken") !== null;
}

export async function registerService(email: string, password: string) {
  try {
    await signUp({
      username: email,
      password,
      options: { userAttributes: { email } },
    });

    return {
      success: true,
      message: "Cadastro realizado! Verifique seu e-mail.",
    };
  } catch (error) {
    console.error("Erro ao registrar:", error);
    return { success: false || "Erro ao cadastrar" };
  }
}
export async function confirmSignupService(email: string, code: string) {
  try {
    await confirmSignUp({ username: email, confirmationCode: code });
    return {
      success: true,
      message: "Conta verificada! Agora você pode fazer login.",
    };
  } catch (error) {
    console.error("Erro ao confirmar código:", error);
    return {
      success: false,
      message: "Erro ao verificar código",
    };
  }
}

export async function resendSignupCodeService(email: string) {
  try {
    await resendSignUpCode({ username: email });
    return { success: true, message: "Novo código enviado para seu e-mail." };
  } catch (error) {
    console.error("Erro ao reenviar código:", error);
    return {
      success: false,
      message: "Erro ao reenviar código",
    };
  }
}

export async function forgotPasswordService(email: string) {
  try {
    await resetPassword({ username: email });
    return { success: true, message: "Código enviado para seu e-mail." };
  } catch (error) {
    console.error("Erro ao solicitar redefinição de senha:", error);
    return {
      success: false,
      message: "Erro ao solicitar redefinição de senha.",
    };
  }
}

export async function resetPasswordService(
  email: string,
  code: string,
  newPassword: string
) {
  try {
    await confirmResetPassword({
      username: email,
      confirmationCode: code,
      newPassword,
    });
    return { success: true, message: "Senha redefinida com sucesso!" };
  } catch (error) {
    console.error("Erro ao redefinir senha:", error);
    return { success: false, message: "Código inválido ou expirado." };
  }
}
