import { ConfigModule, ConfigService } from '@nestjs/config'
import {
  MongooseModuleAsyncOptions,
  MongooseModuleFactoryOptions
} from '@nestjs/mongoose'

export const MongooseConfig: MongooseModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (
    configService: ConfigService
  ): Promise<MongooseModuleFactoryOptions> => ({
    uri: configService.get<string>('URI')
  })
}
