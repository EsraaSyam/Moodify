import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { RegisterRequest } from './request/register.request';
import { ConfigService } from '@nestjs/config';
import { LoginRequest } from './request/login.request';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    private readonly configService;
    constructor(userService: UserService, jwtService: JwtService, configService: ConfigService);
    registerUser(data: RegisterRequest): Promise<any>;
    private hashPassword;
    private isPasswordMatches;
    private createToken;
    login(data: LoginRequest): Promise<string>;
}
