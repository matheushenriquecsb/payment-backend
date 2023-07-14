import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserRequest } from './dtos/create-user-request.dto';
import { GetUserResponse } from './dtos/get-user-reponse.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('/')
  async create(@Body() createUser: CreateUserRequest) {
    return this.userService.create(createUser);
  }

  @Get('/')
  async getAll(): Promise<GetUserResponse[]> {
    return this.userService.getAllUsers();
  }

  @Get('/:userId')
  async getUserById(@Param('userId') userId: number) {
    return this.userService.getAddressByUserId(userId);
  }
}
