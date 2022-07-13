import { NestFactory } from '@nestjs/core'
import { BasicGuard } from './guards/basic.guard'
import { AppModule } from './app.module'
import { HttpExceptionFilter } from './filters/http-exception.filter'
import * as session from 'express-session'
import { MicroserviceOptions, Transport } from '@nestjs/microservices'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  // const redisClient = await NestFactory.createMicroservice<MicroserviceOptions>(
  //   AppModule,
  //   {
  //     transport: Transport.REDIS,
  //     options: {
  //       db: 0,
  //       ''
  //     }
  //   }
  // )

  app.useGlobalGuards(new BasicGuard())

  app.useGlobalFilters(new HttpExceptionFilter())

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
