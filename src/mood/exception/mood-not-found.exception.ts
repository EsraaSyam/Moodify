import { UnauthorizedException } from '@nestjs/common';

export class MoodNotFoundException extends UnauthorizedException {
    constructor(id: number) {
        super(`Mood with ID '${id}' not found.`);
    }
}