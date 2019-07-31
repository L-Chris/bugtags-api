import { Injectable, HttpService } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(private httpService: HttpService) {}

  findOne({ id }) {
    return this.httpService.get(`/users/${id}`).toPromise()
  }
}