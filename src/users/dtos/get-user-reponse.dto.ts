/* eslint-disable prettier/prettier */
import { IsEmail, IsString, IsStrongPassword } from 'class-validator';

export class GetUserResponse {
  @IsString()
  name: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  phone: string;

  @IsString()
  cpf: string;

  @IsStrongPassword()
  @IsString()
  password: string;
}
