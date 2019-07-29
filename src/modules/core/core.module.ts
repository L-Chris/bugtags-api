import { Module, HttpModule as AxiosModule, Global } from '@nestjs/common';

const HttpModule = AxiosModule.register({
    baseURL: 'https://work.bugtags.cn/api',
    timeout: 5000
})

@Global()
@Module({
    imports: [HttpModule],
    exports: [HttpModule]
})
export class CoreModule {}
