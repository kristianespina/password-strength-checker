import { post } from "../api";

export interface IGetPasswordStrength {
  guessTimeSeconds: number;
  guessTimeString: String;
  score: number;
  suggestions?: String[];
  warning?: String;
}

async function getPasswordStrength(
  password: String
): Promise<IGetPasswordStrength> {
  return await post("/password/strength", { password });
}

export { getPasswordStrength };
