import { IsNumber, IsOptional, IsPositive, IsString } from "class-validator";

export class UpdateMoodLogRequest {
    @IsOptional()
    @IsString({ message: 'Note must be a string' })
    note?: string;

    @IsOptional()
    @IsPositive({ message: 'Mood ID must be a positive number' })
    @IsNumber({}, { message: 'Mood ID must be a number' })
    moodId?: number;

    @IsPositive({ message: 'User ID must be a positive number' })
    @IsNumber({}, { message: 'User ID must be a number' })
    userId: number;
}