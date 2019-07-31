import { Controller, Get, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Browser } from '../../decorators/browser.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authSertice: AuthService) {}

  @Get('login')
  login(@Query() query, @Browser() browser) {
    const { account, password } = query
    return this.authSertice.login({ account, password, browser });
  }
}
