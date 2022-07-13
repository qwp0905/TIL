import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { PassportStrategy } from '@nestjs/passport'
import { Request } from 'express'
import { BasicStrategy as Strategy } from 'passport-http'

@Injectable()
export class BasicStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly configService: ConfigService) {
    super({ passReqToCallback: true })
  }

  async validate(req: Request, username: string, password: string) {
    if (
      this.configService.get('BASIC_USER') === username &&
      this.configService.get('BASIC_PASSWORD') === password
    ) {
      return true
    } else return false
  }
}
