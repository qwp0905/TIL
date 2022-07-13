import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { typeORMConfig } from './db/typeorm.config'
import { AppController } from './app.controller'
import { UsersModule } from './users/users.module'
import { configuration } from './config/configuration'
import { AppService } from './app.service'
// import { MongooseModule } from '@nestjs/mongoose'
// import { MongooseConfig } from './db/mongoose.config'
import { ArticleModule } from './articles/article.module'
import { AuthModule } from './auth/auth.module'

@Module({
  imports: [
    ConfigModule.forRoot(configuration),
    TypeOrmModule.forRootAsync(typeORMConfig),
    // MongooseModule.forRootAsync(MongooseConfig),
    UsersModule,
    ArticleModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
