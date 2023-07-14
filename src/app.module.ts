import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { StateModule } from './state/state.module';
import { CityModule } from './city/city.module';
import { AddressModule } from './address/address.module';
import { CacheModule } from './cache/cache.module';
import { AuthModule } from './auth/auth.module';

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
      entities: [`${__dirname}/**/*.entity{.js,.ts}`],
      migrations: [`${__dirname}/migration/{.ts,*.js}`],
      migrationsRun: true,
      synchronize: false,
    }),
    UsersModule,
    StateModule,
    CityModule,
    AddressModule,
    CacheModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
