import { Module, MiddlewareConsumer, CacheModule, CacheInterceptor } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { CoreModule } from './modules/core/core.module';
import { UserModule } from './modules/user/user.module';
import { AppsModule } from './modules/apps/apps.module';
import { UserController } from './modules/user/user.controller';
import { AppsController } from './modules/apps/apps.controller';

@Module({
  imports: [
    CacheModule.register(),
    CoreModule,
    AppsModule,
    UserModule
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
      .apply()
      .forRoutes(UserController, AppsController)
  }
}
