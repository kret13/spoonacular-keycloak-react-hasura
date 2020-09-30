import "dotenv/config";

const forVar = (envVar: string) => `environment variable ${envVar} not found!`;

if (process.env.PORT === undefined) {
  throw new Error(forVar("PORT"));
}
if (process.env.SPOONACULAR_API_KEY === undefined) {
  throw new Error(forVar("SPOONACULAR_API_KEY"));
}

export const env = {
  PORT: process.env.PORT,
  SPOONACULAR_API_KEY: process.env.SPOONACULAR_API_KEY,
};
