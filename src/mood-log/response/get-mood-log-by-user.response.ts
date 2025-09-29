import { Expose, Type } from "class-transformer";

export class MoodResponse {
    @Expose()
    id: number;

    @Expose()
    name: string;
}

export class MoodLogByUserResponse {
    @Expose()
    id: number;

    @Expose()
    note?: string;

    @Expose()
    createdAt: Date;

    @Expose()
    @Type(() => MoodResponse)
    mood: MoodResponse;
}
