import { SingletonService } from './singleton.service';
export declare class SecondSingletonService {
    private readonly singletonService;
    constructor(singletonService: SingletonService);
    getData(): number;
}
