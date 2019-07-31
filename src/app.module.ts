import { Module, MiddlewareConsumer, CacheModule, CacheInterceptor } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { CoreModule } from './modules/core/core.module';
import { UserModule } from './modules/users/users.module';
import { AppsModule } from './modules/apps/apps.module';
import { CompaniesModule } from './modules/companies/companies.module';
import { PassportModule } from './modules/passport/passport.module';
import { AuthModule } from './modules/auth/auth.module';
import { UserController } from './modules/users/users.controller';
import { AppsController } from './modules/apps/apps.controller';
import { CompaniesController } from './modules/companies/companies.controller';
import { AuthController } from './modules/auth/auth.controller';
import { AuthMiddleware } from './middlewares/auth.middleware';
import { BrowserMiddleware } from './middlewares/browser.middleware';

@Module({
  imports: [
    CacheModule.register(),
    CoreModule,
    AppsModule,
    UserModule,
    CompaniesModule,
    PassportModule,
    AuthModule
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor
    }
  ]
})
export class AppModule {
  constructor() {}

  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(BrowserMiddleware)
      .forRoutes(AuthController)

    consumer
      .apply(AuthMiddleware)
      .forRoutes(UserController, AppsController, CompaniesController)
  }
}
