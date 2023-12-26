import { Injectable } from '@nestjs/common';

@Injectable()
export class SingletonService {
  private static instance: SingletonService;
  data: number;

  private constructor() {
    this.data = Math.random();
  }

  static getInstance(): SingletonService {
    if (!SingletonService.instance) {
      SingletonService.instance = new SingletonService();
    }
    return SingletonService.instance;
  }
}