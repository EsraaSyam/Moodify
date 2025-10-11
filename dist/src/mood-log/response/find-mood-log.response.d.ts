import { MoodLogResponse } from "./mood-log.response";
export declare class FindMoodLogResponse {
    moodLogs: MoodLogResponse[];
    total: number;
    page: number;
    limit: number;
    numberOfPages: number;
    isLast: boolean;
    constructor(moodLogs: any, total: number, page: number, limit: number);
}
