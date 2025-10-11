import { UnauthorizedException } from '@nestjs/common';
export declare class MoodNotFoundException extends UnauthorizedException {
    constructor(id: number);
}
