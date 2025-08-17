import { Injectable } from '@nestjs/common';
import { SendMailDto } from './dto/sendEmail.dto';

@Injectable()
export class MailService {
  sendEmail(emailParams: SendMailDto) {
    console.log(emailParams);
    return { message: `Correo Enviado ` };
  }
}
