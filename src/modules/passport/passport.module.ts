import { Module } from '@nestjs/common';
import { PassportController } from './passport.controller';
import { PassportService } from './passport.service';

@Module({
    controllers: [PassportController],
    providers: [PassportService]
})
export class PassportModule {}