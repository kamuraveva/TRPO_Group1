import { Controller, Get } from '@nestjs/common';
import { FirstSingletonService } from './first-singleton.service';
import { SecondSingletonService } from './second-singleton.service';

@Controller('data')
export class SingletonController {
  constructor(
    private readonly firstSingletonService: FirstSingletonService,
    private readonly secondSingletonService: SecondSingletonService,
  ) { }

  @Get('fromFirstService')
  getDataFromFirstService(): number {
    return this.firstSingletonService.getData();
  }

  @Get('fromSecondService')
  getDataFromSecondService(): number {
    return this.secondSingletonService.getData();
  }
}