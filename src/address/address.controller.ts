import { Body, Controller, Param, Post } from '@nestjs/common';
import { AddressService } from './address.service';
import { CreateAddressRequest } from './dtos/create-address.dto';
import { AddressEntity } from './entities/address.entity';

@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post('/:userId')
  async createAddress(
    @Body() createAddressDto: CreateAddressRequest,
    @Param('userId') userId: number,
  ): Promise<AddressEntity> {
    return this.addressService.createAddress(createAddressDto, userId);
  }
}
