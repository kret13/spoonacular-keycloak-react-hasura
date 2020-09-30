import "dotenv/config";

const forVar = (envVar) => `environment variable ${envVar} not found!`;

if (process.env.HASURA_ADMIN_SECRET === undefined) {
  throw new Error(forVar("HASURA_ADMIN_SECRET"));
}
export const env = {
  HASURA_ADMIN_SECRET: process.env.HASURA_ADMIN_SECRET,
};
