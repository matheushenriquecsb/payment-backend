import { Controller, Get } from '@nestjs/common';
import { StateService } from './state.service';

@Controller('states')
export class StateController {
  constructor(private readonly stateService: StateService) {}
  @Get('/')
  getAll() {
    return this.stateService.getAllStates();
  }
}
