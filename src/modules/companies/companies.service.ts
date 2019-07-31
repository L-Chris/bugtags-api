import { Injectable, HttpService } from '@nestjs/common';

@Injectable()
export class CompaniesService {
  constructor(private httpService: HttpService) {}

  find(): Promise<any> {
    return this.httpService.get('/companies/').toPromise()
  }
}