import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";
import { AppDataSource } from "./data-source";


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(AppDataSource
    ),

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

