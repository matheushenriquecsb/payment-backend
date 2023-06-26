/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { UserEntity } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserRequest } from './dtos/create-user-request.dto'; 
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async create(createUser: CreateUserRequest): Promise<UserEntity> {
    const passwordHashed = await bcrypt.hash(createUser.password, 10);

    return this.userRepository.save({
      ...createUser,
      typeUser: 1,
      password: passwordHashed,
    });
  }

  async getAllUsers(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  async findUserById(userId: number): Promise<UserEntity>{
    const user = await this.userRepository.findOne({
      where: {
        id: userId ,
      },
    });

    if(!user) {
      throw new NotFoundException('User not found')
    }

    return user
  }
}
