import { Controller, Get, Param, Query, Post, Body } from '@nestjs/common';
import { AppsService } from './apps.service';

@Controller('apps')
export class AppsController {
  constructor(private readonly appsService: AppsService) {}

  @Get()
  async find() {
    const res = await this.appsService.find();
    return res.data;
  }

  @Post()
  async save(@Body() body) {
    const res = await this.appsService.save(body)
    return res.data
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

  @Post(':id/keywords')
  async saveWords(@Body() body) {
    const res = await this.appsService.saveWords(body);
    return res.data;
  }

  @Get(':id/versions')
  async findVersions(@Param() params) {
    const res = await this.appsService.findVersions({ id: params.id });
    return res.data;
  }

  @Post(':id/versions')
  async saveVersions(@Param() params, @Body() body) {
    const res = await this.appsService.saveVersions({ id: params.id, version_id: body.version_id, version_code: body.version_code })
    return res.data;
  }

  @Get(':id/issues')
  async findIssues(@Param() params) {
    const res = await this.appsService.findIssues({ id: params.id, page: params.page, flags: params.flags, members: params.members });
    return res.data
  }

  @Get(':id/issues/:issueId')
  async findOneIssue(@Param() params) {
    const res = await this.appsService.findOneIssue({ id: params.id, issueId: params.issueId });
    return res.data
  }

  @Post(':id/issues')
  async saveIssues(@Param() params, @Body() body) {
    const res = await this.appsService.saveIssues({ id: params.id, ...body })
    return res.data;
  }

  @Get(':id/issues/page')
  async getIssueCount(@Param() params) {
    const res = await this.appsService.getIssueCount({ id: params.id });
    return res.data;
  }

  @Post(':id/issues/:issueId/tag/:tagId')
  async saveTag(@Param() params, @Body() body) {
    const res = await this.appsService.saveTag({
      id: params.id,
      issueId: params.issueId,
      tagId: params.tagId,
      ...body
    })

    return res.data;
  }

  @Post(':id/issues/:issueId/tags/:tagId/repeat')
  async saveRepeatTag(@Param() params, @Body() body) {
    const res = await this.appsService.saveRepeatTag({
      id: params.id,
      issueId: params.issueId,
      tagId: params.tagId,
      ...body
    })

    return res.data;
  }

  @Get(':id/search/suggest')
  async findSearchSuggest(@Param() params) {
    const res = await this.appsService.findSearchSuggest({
      id: params.id,
      keyword: params.keyword
    })

    return res.data;
  }

  @Get(':id/webhooks')
  async findWebhooks(@Param() params) {
    const res = await this.appsService.findWebhooks({
      id: params.id
    })

    return res.data;
  }
}
