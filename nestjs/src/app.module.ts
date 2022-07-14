import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { UsersModule } from './users/users.module'
import { configuration } from './config/configuration'
import { AppService } from './app.service'
import { ArticleModule } from './articles/article.module'
import { AuthModule } from './auth/auth.module'
import { RabbitmqModule } from './rabbitmq/rabbitmq.module'
import { RedisModule } from './redis/redis.module'
import { DatabaseModule } from './db/database.module'

@Module({
  imports: [
    ConfigModule.forRoot(configuration),
    DatabaseModule,
    UsersModule,
    ArticleModule,
    AuthModule,
    RabbitmqModule,
    RedisModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
