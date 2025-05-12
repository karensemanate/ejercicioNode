import dotenv from "dotenv";
dotenv.config();

const config = {
  PORT: process.env.PORT,
  DATABASE_URL: process.env.DATABASE_URL,
  SECRET_KEY: process.env.SECRET_KEY,
  EXPIRES_IN: "12h",
};

export default config;
