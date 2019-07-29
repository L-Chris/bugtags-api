import { Controller, Get } from '@nestjs/common';
import { AppsService } from './apps.service';

@Controller('apps')
export class AppsController {
  constructor(private readonly appsService: AppsService) {}

  @Get()
  async find() {
    const res = await this.appsService.find();
    return res;
  }
}
