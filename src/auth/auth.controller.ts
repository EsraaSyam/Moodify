import { Body, Controller, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterRequest } from './request/register.request';
import { UserResponse } from './response/user.response';
import type { Response } from 'express';
import { LoginRequest } from './request/login.request';
import { Public } from './decorator/public.decorator';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('register')
    @Public()
    async registerUser(@Body() data: RegisterRequest, @Res() res: Response) {
        const user = await this.authService.registerUser(data);
        return res.status(201).json({
            message: 'User has been created successfully',
            data: new UserResponse(user),
        });
    }

    @Post('login')
    @Public()
    async login(@Body() data: LoginRequest, @Res() res: Response) {
        const token = await this.authService.login(data);
        return res.status(200).json({
            message: 'User has been logged in successfully',
            token,
        });
    }
}
