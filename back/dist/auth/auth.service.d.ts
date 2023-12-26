import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { IUser } from './types/types';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    private readonly logger;
    constructor(userService: UserService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<import("../user/entities/user.entity").User>;
    login(user: IUser): Promise<{
        id: string;
        email: string;
        token: string;
    }>;
}
