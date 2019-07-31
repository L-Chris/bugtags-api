import { Injectable, HttpService } from '@nestjs/common';

@Injectable()
export class AppsService {
  constructor(private httpService: HttpService) {}

  find(): Promise<any> {
    return this.httpService.get('/apps/').toPromise();
  }

  getDashboard({ id }): Promise<any> {
    return this.httpService.get(`/apps/${id}/dashboard`).toPromise()
  }

  getMessageData({ id }): Promise<any> {
    return this.httpService.get(`/apps/${id}/messages/unread`).toPromise()
  }

  findMessages({ id, type, page }): Promise<any> {
    return this.httpService.get(`/apps/${id}/messages/${type}/`, {
      data: { page }
    }).toPromise()
  }

  findFilters({ id }): Promise<any> {
    return this.httpService.get(`/apps/${id}/filters/`).toPromise()
  }

  findMembers({ id }): Promise<any> {
    return this.httpService.get(`/apps/${id}/members/`).toPromise()
  }

  findModules({ id }): Promise<any> {
    return this.httpService.get(`/apps/${id}/modules/`).toPromise()
  }

  findWords({ id }): Promise<any> {
    return this.httpService.get(`/apps/${id}/keywords`).toPromise()
  }
}