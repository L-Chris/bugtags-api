import { Module, HttpModule as AxiosModule, Global } from '@nestjs/common';
import { ConfigService } from '../config/config.service';
import { ConfigModule } from '../config/config.module';

const HttpModule = AxiosModule.registerAsync({
  imports: [ConfigModule],
  useFactory: async(config: ConfigService) => ({
    baseURL: 'https://work.bugtags.cn/api',
    headers: {
      'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.90 Safari/537.36',
      Cookie: config.get('USER_COOKIE')
    },
    timeout: 5000,
    maxRedirects: 5
  }),
  inject: [ConfigService]
})

@Global()
@Module({
    imports: [HttpModule],
    exports: [HttpModule]
})
export class CoreModule {
}
