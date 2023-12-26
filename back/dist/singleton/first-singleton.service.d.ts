import { SingletonService } from './singleton.service';
export declare class FirstSingletonService {
    private readonly singletonService;
    constructor(singletonService: SingletonService);
    getData(): number;
}
