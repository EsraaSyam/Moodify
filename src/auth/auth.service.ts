import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { RegisterRequest } from './request/register.request';
import { UserAlreadyExistException } from './exception/user-is-already-exist.exception';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';
import { LoginRequest } from './request/login.request';
import { EmailNotFoundException } from './exception/email-not-found.exception';
import { InvalidCredentialsException } from './exception/invalid-credentials.exception';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
        private readonly configService: ConfigService,
    ) { }

    async registerUser(data: RegisterRequest) {
        const existingUser = await this.userService.findByEmail(data.email);

        if (existingUser) {
            throw new UserAlreadyExistException(data.email);
        }

        const hashedPassword = await this.hashPassword(data.password);

        return await this.userService.create({
            ...data,
            password: hashedPassword,
        });
    }

    private async hashPassword(password: string): Promise<string> {
        const saltRounds = Number(this.configService.get("SALT_ROUNDS"));
        return await bcrypt.hash(password, saltRounds);
    }

    private async isPasswordMatches(password: string, storedHashedPassword: string): Promise<boolean> {
        return await bcrypt.compare(password, storedHashedPassword);
    }

    private createToken(id: number, email: string): string {
        return this.jwtService.sign({ id, email });
    }

    async login(data: LoginRequest): Promise<string> {
        const user = await this.userService.findByEmail(data.email);
        
        if (!user) {
            throw new InvalidCredentialsException();
        }

        const isPasswordValid = await this.isPasswordMatches(data.password, user.password);
        
        if (!isPasswordValid) {
            throw new InvalidCredentialsException();
        }
        
        return this.createToken(user.id, user.email);
    }
}
