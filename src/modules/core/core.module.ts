import { Module, HttpModule as AxiosModule, Global } from '@nestjs/common';

const HttpModule = AxiosModule.register({
    baseURL: 'https://work.bugtags.cn/api',
    headers: {
      'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.90 Safari/537.36',
      Cookie: 'gr_user_id=6e0826cd-cfde-44b6-b063-cfdedafa4df8; user_id=1601974241867707; access_token=OMUJECVjFfMTYwMTk3NDI0MTg2NzcwN19iR2xoYm1kcWFXRm9kV2xBYlc5NWFUTTJOUzVqYjIwPV80MmVkYzNkOGExZmVjZDkxNmM0NmQwZTE1ZDBiZDFmZF8xNTY2NDUyMTI4; app_id=1607558636769963'
    },
    timeout: 5000,
    maxRedirects: 5
})

@Global()
@Module({
    imports: [HttpModule],
    exports: [HttpModule]
})
export class CoreModule {
}
