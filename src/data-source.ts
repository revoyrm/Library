import "reflect-metadata";
import dotenv from 'dotenv';
import { DataSource } from "typeorm";
import { entities } from "./entity";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: process.env.LIBRARY_PASSWORD,
  database: "library",
  synchronize: true,
  logging: false,
  entities,
  migrations: ["src/migrations/**/*.ts"],
  subscribers: [],
});
