import { UnauthorizedException } from '@nestjs/common';

export class EmailNotFoundException extends UnauthorizedException {
    constructor() {
        super('Authentication failed: The provided email address is not registered.');
    }
}