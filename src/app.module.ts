import { Module, CacheModule, CacheInterceptor } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { CoreModule } from './modules/core/core.module';
import { UserModule } from './modules/users/users.module';
import { AppsModule } from './modules/apps/apps.module';
import { CompaniesModule } from './modules/companies/companies.module';

@Module({
  imports: [
    CacheModule.register(),
    CoreModule,
    AppsModule,
    UserModule,
    CompaniesModule
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor
    }
  ]
})
export class AppModule {}
