import { ConfigModuleOptions } from '@nestjs/config'

export const configuration: ConfigModuleOptions = {
  isGlobal: true,
  ignoreEnvFile: false,
  envFilePath: '.env'
}
