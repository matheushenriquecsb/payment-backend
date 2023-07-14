/* eslint-disable prettier/prettier */
import { IsEmail, IsPhoneNumber, IsString, IsStrongPassword } from 'class-validator';

export class CreateUserRequest {
  @IsString()
  name: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @IsPhoneNumber('BR')
  phone: string;

  @IsString()
  cpf: string;

  @IsStrongPassword()
  @IsString()
  password: string;

  @IsString()
  access_token: string
}
