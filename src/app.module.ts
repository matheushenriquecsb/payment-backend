import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.PAYMENTS_DATABASE_HOST,
      port: Number(process.env.PAYMENTS_DATABASE_PORT),
      username: process.env.PAYMENTS_DATABASE_USERNAME,
      password: process.env.PAYMENTS_DATABASE_PASSWORD,
      database: process.env.PAYMENTS_DATABASE_DATABASE,
      entities: ['dist/**/*.entity.js'],
      synchronize: true,
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
