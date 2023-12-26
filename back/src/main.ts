import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MyLogger } from './my-logger/my-logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });
  app.setGlobalPrefix('api');
  app.enableCors();
  app.useLogger(app.get(MyLogger));
  await app.listen(3001);
}
bootstrap();
