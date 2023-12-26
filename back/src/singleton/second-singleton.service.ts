import { Injectable } from '@nestjs/common';
import { SingletonService } from './singleton.service';

@Injectable()
export class SecondSingletonService {
  constructor(private readonly singletonService: SingletonService) { }

  getData(): number {
    return this.singletonService.data;
  }
}