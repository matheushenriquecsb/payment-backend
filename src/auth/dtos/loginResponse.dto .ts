/* eslint-disable prettier/prettier */
import { IsEmail, IsNumber, IsString } from 'class-validator';

export class LoginResponseDto {
  @IsString()
  name: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsNumber() 
  typeUser: number;

   
}
