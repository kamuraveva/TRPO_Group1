import { Module } from '@nestjs/common';
import { SingletonService } from './singleton.service';
import { FirstSingletonService } from './first-singleton.service';
import { SecondSingletonService } from './second-singleton.service';
import { SingletonController } from './singleton.controller';

@Module({
  providers: [{
    provide: SingletonService,
    useValue: SingletonService.getInstance(), // Используем значение, возвращаемое методом getInstance() в качестве экземпляра сервиса
  },
    FirstSingletonService,
    SecondSingletonService
  ],
  controllers: [SingletonController],
})
export class SingletonModule { }