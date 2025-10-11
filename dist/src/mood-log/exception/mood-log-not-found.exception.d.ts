import { UnauthorizedException } from '@nestjs/common';
export declare class MoodLogNotFoundException extends UnauthorizedException {
    constructor(id: number);
}
