import { Service } from "typedi";

export const apiConfig = {
  port: process.env.API_SERVER_PORT ? process.env.API_SERVER_PORT : "8080",
};
