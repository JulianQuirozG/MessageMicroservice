/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class SendMailDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  placa: string;

  @IsString()
  @IsNotEmpty()
  mensaje: string;

  @IsString()
  @IsNotEmpty()
  parqueaderoNombre: string;
}
