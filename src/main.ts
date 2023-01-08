import { ValidationPipe, Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformInterceptor } from './tranform.interceptor';

// logging libraries: *pino*, bunion, winston
// import pino from 'pino';

async function bootstrap() {
  const port = 3000;
  const logger = new Logger();

  const app = await NestFactory.create(AppModule);

  app.enableCors();

  app.useGlobalPipes(
    new ValidationPipe({
      forbidUnknownValues: false,
    }),
  );
  app.useGlobalInterceptors(new TransformInterceptor());

  await app.listen(port);

  logger.log(`Application listening on port ${port}..`, 'APP');
}
bootstrap();
