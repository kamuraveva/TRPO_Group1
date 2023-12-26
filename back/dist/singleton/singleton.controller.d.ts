import { FirstSingletonService } from './first-singleton.service';
import { SecondSingletonService } from './second-singleton.service';
export declare class SingletonController {
    private readonly firstSingletonService;
    private readonly secondSingletonService;
    constructor(firstSingletonService: FirstSingletonService, secondSingletonService: SecondSingletonService);
    getDataFromFirstService(): number;
    getDataFromSecondService(): number;
}
