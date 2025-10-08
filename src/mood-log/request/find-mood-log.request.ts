import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";

export class FindMoodLogRequest {
    @IsNumber()
    @IsPositive()
    @IsNotEmpty()
    page: number;

    @IsNumber()
    @IsPositive()
    @IsNotEmpty()
    limit: number = 10;

    @IsString()
    orderBy: string = "createdAt";


    @IsString()
    orderDirection: "ASC" | "DESC" = "DESC";
}
