import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dtos/login.dto';
import { UsersService } from 'src/users/users.service';
import { compare } from 'bcrypt';
import { UserEntity } from 'src/users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto) {
    const user: UserEntity | undefined =
      await this.usersService.findUserByEmail(loginDto.email);

    const isMatch = await compare(loginDto.password, user?.password);

    if (!user || !isMatch) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const { ...newUser } = user;
    return {
      access_token: await this.jwtService.signAsync(newUser),
      user: user,
    };
  }
}
