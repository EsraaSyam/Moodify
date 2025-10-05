import { DataSource } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";
import { ConfigModule, ConfigService } from "@nestjs/config";
import * as path from "path";


ConfigModule.forRoot({
  isGlobal: true,
  envFilePath: ".env",
});

const configService = new ConfigService();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: configService.get<string>("DB_HOST"),
  port: configService.get<number>("DB_PORT"),
  username: configService.get<string>("DB_USERNAME"),
  password: configService.get<string>("DB_PASSWORD"),
  database: configService.get<string>("DB_NAME"),
  entities: [path.resolve(__dirname, "src/**/*.entity.{ts,js}")],
  migrations: [path.resolve(__dirname, "src/migrations/*.{ts,js}")],
  namingStrategy: new SnakeNamingStrategy(),
  synchronize: false,
});