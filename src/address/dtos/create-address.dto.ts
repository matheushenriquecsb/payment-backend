/* eslint-disable prettier/prettier */
import { IsInt, IsOptional, IsString } from 'class-validator';

export class CreateAddressRequest {

  @IsString()
  @IsOptional()
  complement: string;
 
  @IsInt()
  number: number;

  @IsString()
  cep: string;

  @IsInt()
  cityId: number;
  
}
