import { Injectable, HttpService } from '@nestjs/common';

@Injectable()
export class PassportService {
  constructor(private httpService: HttpService) {}

  login({
    emial,
    password,
    btg_sign,
    geetest_challenge,
    geetest_validate,
    geetest_seccode
  }): Promise<any> {
    return this.httpService.post('/passport/login', {
      emial,
      password,
      btg_sign,
      geetest_challenge,
      geetest_validate,
      geetest_seccode
    }).toPromise()
  }
}