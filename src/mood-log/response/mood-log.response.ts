import { Expose, Type } from "class-transformer";

export class UserResponse {
    @Expose()
    id: number;

    @Expose()
    name: string;

    @Expose()
    email: string;
}

export class MoodResponse {
    @Expose()
    id: number;

    @Expose()
    name: string;
}

export class MoodLogResponse {
    @Expose()
    id: number;

    @Expose()
    note?: string;

    @Expose()
    createdAt: Date;

    @Expose()
    @Type(() => UserResponse)
    user: UserResponse;

    @Expose()
    @Type(() => MoodResponse)
    mood: MoodResponse;
}
