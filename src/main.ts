import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from 'node:process';
import 'dotenv/config';
import { json, urlencoded } from 'express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SwaggerConfig } from './utils/SwaggerConfig';

const { PORT = 3201, API_VERSION = 'v1' } = process.env;

async function Application() {

  const app = await NestFactory.create(AppModule);

  // Some Configuration for API (Not about Swagger)
  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ extended: true, limit: '50mb' }));
  // Setting API Path
  app.setGlobalPrefix(API_VERSION);

  // Swagger Options
  const options = new DocumentBuilder()
    .addBearerAuth()
    .setTitle(SwaggerConfig.TITLE)
    .setDescription(SwaggerConfig.DESCRIPTION)
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(`${API_VERSION}/docs`, app, document);
  console.log(`Api Url path: http://localhost:${PORT}/${API_VERSION}/docs`);

  await app.listen(PORT);
}

Application().then(() => {
  console.log(`Application started! http://localhost:${PORT}/${API_VERSION}`);
});
