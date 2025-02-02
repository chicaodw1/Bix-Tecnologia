import { Amplify } from "aws-amplify";

const REGION = process.env.NEXT_PUBLIC_AWS_REGION;
const USER_POOL_ID = process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID;
const CLIENT_ID = process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID;


if (!REGION || !USER_POOL_ID || !CLIENT_ID) {
  throw new Error("As variáveis de ambiente do Cognito não estão corretamente definidas.");
}

const amplifyConfig = {
  Auth: {
    Cognito: {
      region: REGION,
      userPoolId: USER_POOL_ID,
      userPoolClientId: CLIENT_ID,
    },
  },
};

export function configureAmplify() {
  Amplify.configure(amplifyConfig);
}

export default amplifyConfig;
