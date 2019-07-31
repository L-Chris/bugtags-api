import { Injectable, NestMiddleware } from '@nestjs/common';
import * as puppeteer from 'puppeteer';
import { Request, Response } from 'express';

@Injectable()
export class BrowserMiddleware implements NestMiddleware {
  constructor() {}

  async use(req: Request, res: Response, next: Function) {
    req.browser = await puppeteer.launch({ headless: false });

    await next();
  }
}