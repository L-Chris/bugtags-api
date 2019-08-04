import { Controller, Get, Param, Body } from '@nestjs/common';
import { UserService } from './users.service'

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  findOne(@Param() params) {
    return this.userService.findOne({ id: params.id });
  }

  @Get(':id/notify_setting')
  getNotifySetting(@Param() params) {
    return this.userService.getNotifySetting({ id: params.id })
  }
}
