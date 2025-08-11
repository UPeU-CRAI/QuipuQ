import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const origins = (process.env.CORS_ORIGIN || '').split(',').filter(Boolean);
  if (origins.length > 0) {
    app.enableCors({ origin: origins });
  } else {
    app.enableCors();
  }
  await app.listen(process.env.API_PORT || process.env.PORT || 3000);
}
bootstrap();
