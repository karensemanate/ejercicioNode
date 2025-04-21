import dotenv from "dotenv";
dotenv.config();

const config_KYS = {
  PORT: process.env.PORT,
  DATABASE_URL: process.env.DATABASE_URL
};

export default config_KYS;