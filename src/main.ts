import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true
  });

  app.setGlobalPrefix('api');

  const options = new DocumentBuilder()
    .setBasePath('/api')
    .setTitle('Swagger')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/api/docs', app, document);

  // app.useGlobalFilters(new GlobalExceptionFilter());
  // app.useGlobalInterceptors(new TransformInterceptor());

  await app.listen(80);
}

bootstrap();
