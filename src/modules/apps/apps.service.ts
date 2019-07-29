import { Injectable, HttpService } from '@nestjs/common';

@Injectable()
export class AppsService {
  constructor(private readonly httpService: HttpService) {}

  async find(): Promise<object> {
    return this.httpService.get('/apps/').toPromise()
  }
}