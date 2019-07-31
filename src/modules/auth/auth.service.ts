import { Injectable, HttpService } from '@nestjs/common';
import { Browser } from 'puppeteer';

@Injectable()
export class AuthService {
  constructor(private httpService: HttpService) {}

  async login({ account, password, browser }: { account: string, password: string, browser: Browser}) {
    const page = await browser.newPage()
    await page.goto('https://work.bugtags.cn/login.html', { waitUntil: 'networkidle2' })

    await page.evaluate(({ account, password }) => {
      const $account = $('#login_email');
      const $password = $('#login_pwd');
      $account.val(account).blur();
      $password.val(password).blur();
    }, { account, password })

    await page.waitFor(1000);

    await page.click('#btn_login');

    await page.waitFor(2000);

    await page.screenshot({path: 'screenshot.png'});

    await page.close()

    return []
  }
}