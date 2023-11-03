import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import config from './config/config';

const app: Express = express();

app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false,
  })
);

app.use(compression());

app.use(
  cors({
    origin: [config.cors_origin],
    credentials: true,
  })
);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
