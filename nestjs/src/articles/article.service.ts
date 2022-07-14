import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { FilterQuery, Model, ProjectionFields, QueryOptions } from 'mongoose'
import { Article, ArticleDocument } from './schemas/article.schema'

@Injectable()
export class ArticleService {
  constructor(
    @InjectModel(Article.name, 'mongo') private article: Model<ArticleDocument>
  ) {}

  async find(
    query: FilterQuery<ArticleDocument>,
    projection: ProjectionFields<ArticleDocument>,
    options: Partial<QueryOptions> = {}
  ) {
    const result: Article[] = await this.article.find(
      query,
      projection,
      options
    )
    return result
  }
}
