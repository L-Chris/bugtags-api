import { Controller, Post, Body } from '@nestjs/common';
import { PassportService } from './passport.service';

@Controller('passport')
export class PassportController {
  constructor(private readonly passportService: PassportService) {}

  @Post('login')
  async login(@Body() body) {
    const res = await this.passportService.login(body);
    return res.data;
  }
}
