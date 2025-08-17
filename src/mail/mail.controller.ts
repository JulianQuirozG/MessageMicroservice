import { Body, Controller, Post } from '@nestjs/common';
import { MailService } from './mail.service';
import { SendMailDto } from './dto/sendEmail.dto';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}
  @Post()
  sendEmail(@Body() emailParams: SendMailDto) {
    return this.mailService.sendEmail(emailParams);
  }
}
