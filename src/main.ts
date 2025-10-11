import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import express, { Request, Response } from 'express';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './common/http-exception.filter';

const server = express();
let appInitialized = false;

async function initApp() {
  if (appInitialized) return;

  const app = await NestFactory.create(AppModule, new ExpressAdapter(server), {
    logger: false,
  });

  app.setGlobalPrefix('api/v1');

  app.useGlobalFilters(new HttpExceptionFilter());

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );

  app.enableCors();
  await app.init();
  appInitialized = true;
}

export default async function handler(req: Request, res: Response) {
  try {
    await initApp();
    server(req, res);
  } catch (err) {
    console.error('Vercel handler error:', err);
    res.status(500).send('Internal Server Error');
  }
}
