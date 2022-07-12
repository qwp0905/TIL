import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { typeORMConfig } from './db/typeorm.config'
import { AppController } from './app.controller'
import { UsersModule } from './users/users.module'
import { configuration } from '../config/configuration'
import { AppService } from './app.service'
import { MongooseModule } from '@nestjs/mongoose'
import { MongooseConfig } from './db/mongoose.config'

@Module({
  imports: [
    // TypeOrmModule.forRoot(typeORMConfig),
    ConfigModule.forRoot(configuration),
    TypeOrmModule.forRootAsync(typeORMConfig),
    MongooseModule.forRootAsync(MongooseConfig),
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
