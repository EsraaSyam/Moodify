import { AuthService } from './auth.service';
import { RegisterRequest } from './request/register.request';
import type { Response } from 'express';
import { LoginRequest } from './request/login.request';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    registerUser(data: RegisterRequest, res: Response): Promise<Response<any, Record<string, any>>>;
    login(data: LoginRequest, res: Response): Promise<Response<any, Record<string, any>>>;
}
