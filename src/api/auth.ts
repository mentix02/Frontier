import { Credentials } from "../store/auth/types";

const defaultChars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export const getToken = async (
  { username = defaultChars, password = defaultChars }: Credentials,
  length = 15
): Promise<string> => {
  let token = "";
  let pool = username + password;
  for (let i = 0; i < length; ++i) {
    token += pool.charAt(Math.floor(Math.random() * username.length));
  }
  await new Promise((r) => setTimeout(r, 1500));
  return token;
};
