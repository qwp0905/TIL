import { NestFactory } from '@nestjs/core'
import { BasicGuard } from './guards/basic.guard'
import { AppModule } from './app.module'
import { HttpExceptionFilter } from './filters/http-exception.filter'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.useGlobalFilters(new HttpExceptionFilter())

  app.useGlobalGuards(new BasicGuard())

  await app.listen(3000)
}
bootstrap()
