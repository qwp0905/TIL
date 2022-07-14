import { Module } from '@nestjs/common'
import { ArticleController } from './article.controller'
import { ArticleService } from './article.service'
import { ArticleCollection } from './schemas/article.schema'

@Module({
  imports: [ArticleCollection],
  controllers: [ArticleController],
  providers: [ArticleService]
})
export class ArticleModule {}
