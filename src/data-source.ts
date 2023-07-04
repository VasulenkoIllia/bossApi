import * as dotenv from "dotenv";
import "reflect-metadata";
import * as path from "path";
import * as process from "process";

dotenv.config()

const entityPath = path.join(__dirname,  "entities", "*.entity.{js,ts}");
const migrationPath = path.join(__dirname,  "migrations", "*.{js,ts}");
export const AppDataSource  = {
    type: (process.env.DB_TYPE) as "mysql" | "mariadb",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    logging: false,
    entities: [entityPath],
    migrations: [migrationPath],
    subscribers: [],

}


