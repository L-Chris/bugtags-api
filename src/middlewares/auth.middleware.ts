import { Injectable, NestMiddleware, HttpException } from '@nestjs/common';
import * as cookieParser from 'cookie';
import { Request, Response } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    constructor() {}

    async use(req: Request, res: Response, next: Function) {
        const { access_token, user_id } = cookieParser.parse(req.headers.cookie || '');

        if (!access_token || !user_id) throw new HttpException('Forbiden', 403);
        // const result = await this.userService.findOne({ id: user_id })
        // const user = result.data
        // if (!user.id) throw new HttpException('Forbiden', 403);

        // req.user = user;

        await next()
    }
} 