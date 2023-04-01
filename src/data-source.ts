import "reflect-metadata";
import { DataSource } from "typeorm";
import { entities } from "./entity";
export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "password",
  database: "library",
  synchronize: true,
  logging: false,
  entities,
  migrations: ["src/migrations/**/*.ts"],
  subscribers: [],
});
