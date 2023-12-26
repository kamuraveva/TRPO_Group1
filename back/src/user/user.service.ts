import { Injectable, BadRequestException, Logger } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as argon2 from "argon2";
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);
  constructor (
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

    async create(createUserDto: CreateUserDto) {
      this.logger.log(`создание пользователя с email ${createUserDto.email}`)
      const existUser = await this.userRepository.findOne({
        where: {
          email: createUserDto.email,
        },
      })
      if(existUser) throw new BadRequestException('This email already exist')

      const user = await this.userRepository.save({
        email: createUserDto.email,
        password: await argon2.hash(createUserDto.password),
      })
      
      const token = this.jwtService.sign({ id: user.id, email: createUserDto.email})

      return {user, token};
  }

  async findOne(email: string) {
    return await this.userRepository.findOne({
      where: {
        email,
      },
    })
  }
}
