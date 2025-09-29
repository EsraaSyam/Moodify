import { plainToInstance } from "class-transformer";
import { MoodLogResponse } from "./mood-log.response";

export class FindMoodLogResponse {
    moodLogs: MoodLogResponse[];
    total: number;
    page: number;
    limit: number;
    numberOfPages: number;
    isLast: boolean;

    constructor(moodLogs: any, total: number, page: number, limit: number) {
        this.moodLogs = moodLogs.map((moodLog: any) => plainToInstance(MoodLogResponse, moodLog, { excludeExtraneousValues: true }));
        this.total = total;
        this.page = page;
        this.limit = limit;
        this.numberOfPages = Math.ceil(total / limit);
        this.isLast = page === this.numberOfPages;
    }
}
