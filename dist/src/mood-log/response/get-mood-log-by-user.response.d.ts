export declare class MoodResponse {
    id: number;
    name: string;
}
export declare class MoodLogByUserResponse {
    id: number;
    note?: string;
    createdAt: Date;
    mood: MoodResponse;
}
