import { Repository } from 'typeorm'
import { User } from './entities/user.entity'

export class UserRepository extends Repository<User> {
  async findById(id: number): Promise<User> {
    const user = await this.findOne({ where: { id } })
    return user
  }
}
