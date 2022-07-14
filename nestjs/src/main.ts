import { NestFactory } from '@nestjs/core'
import { BasicGuard } from './guards/basic.guard'
import { AppModule } from './app.module'
import { HttpExceptionFilter } from './filters/http-exception.filter'
import * as session from 'express-session'
import * as redisStore from 'cache-manager-redis-store'
import Redis from 'ioredis'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.useGlobalGuards(new BasicGuard())

  app.useGlobalFilters(new HttpExceptionFilter())

  const REDIS: Redis = app.get('REDIS_1')

  app.use(
    session({
      secret: 'secret',
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: true
      }
    })
  )

  await app.listen(3000)
}
bootstrap()
