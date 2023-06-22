import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserRequest } from './dtos/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Post('/')
  async create(@Body() createUser: CreateUserRequest) {
    return this.userService.create(createUser);
  }
}
