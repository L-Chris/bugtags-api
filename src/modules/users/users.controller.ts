import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './users.service'

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  findOne(@Param() params) {
    return this.userService.findOne({ id: params.id });
  }
}
