import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppsService } from './apps.service';

@Controller('apps')
export class AppsController {
  constructor(private readonly appsService: AppsService) {}

  @Get()
  async find() {
    const res = await this.appsService.find();
    return res.data;
  }

  @Get(':id/dashboard') 
  async getDashboard(@Param() params) {
    const res = await this.appsService.getDashboard({ id: params.id });
    return res.data;
  }

  @Get(':id/messages/unread') 
  async getMessageData(@Param() params) {
    const res = await this.appsService.getMessageData({ id: params.id });
    return res.data;
  }

  @Get(':id/messages/:type') 
  async findMessages(@Param() params, @Query() query) {
    const res = await this.appsService.findMessages({
      id: params.id,
      type: params.type,
      page: query.page
    });
    return res.data;
  }

  @Get(':id/filters')
  async findFilters(@Param() params) {
    const res = await this.appsService.findFilters({ id: params.id });
    return res.data;
  }

  @Get(':id/members')
  async findMembers(@Param() params) {
    const res = await this.appsService.findMembers({ id: params.id });
    return res.data;
  }

  @Get(':id/modules')
  async findModules(@Param() params) {
    const res = await this.appsService.findModules({ id: params.id });
    return res.data;
  }

  @Get(':id/keywords')
  async findWords(@Param() params) {
    const res = await this.appsService.findWords({ id: params.id });
    return res.data;
  }
}
