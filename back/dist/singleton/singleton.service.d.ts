export declare class SingletonService {
    private static instance;
    data: number;
    private constructor();
    static getInstance(): SingletonService;
}
