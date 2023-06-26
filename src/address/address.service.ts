import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddressEntity } from './entities/address.entity';
import { Repository } from 'typeorm';
import { CreateAddressRequest } from './dtos/create-address.dto';
import { UsersService } from 'src/users/users.service';
import { CityService } from 'src/city/city.service';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(AddressEntity)
    private readonly addressRepository: Repository<AddressEntity>,
    private readonly userService: UsersService,
    private readonly cityService: CityService,
  ) {}

  async createAddress(
    addressDto: CreateAddressRequest,
    userId: number,
  ): Promise<AddressEntity> {
    await this.userService.findUserById(userId);
    await this.cityService.findCityById(addressDto.cityId);
    const newAddress = this.addressRepository.create({
      ...addressDto,
      userId,
    });

    return this.addressRepository.save(newAddress);
  }
}
