import { IsNumber, IsOptional, IsPositive } from "class-validator";

export class CreateMoodLogRequest {
    @IsOptional()
    note?: string;

    @IsNumber({},{ message: 'Mood ID must be a number' })
    @IsPositive({ message: 'Mood ID must be a positive number' })
    moodId: number;
}