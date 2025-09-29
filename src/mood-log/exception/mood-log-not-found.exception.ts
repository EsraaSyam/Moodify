import { UnauthorizedException } from '@nestjs/common';

export class MoodLogNotFoundException extends UnauthorizedException {
    constructor(id: number) {
        super(`Mood log with ID '${id}' not found.`);
    }
}