export declare class UserResponse {
    id: number;
    name: string;
    email: string;
}
export declare class MoodResponse {
    id: number;
    name: string;
}
export declare class MoodLogResponse {
    id: number;
    note?: string;
    createdAt: Date;
    user: UserResponse;
    mood: MoodResponse;
}
