"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindMoodLogResponse = void 0;
const class_transformer_1 = require("class-transformer");
const mood_log_response_1 = require("./mood-log.response");
class FindMoodLogResponse {
    moodLogs;
    total;
    page;
    limit;
    numberOfPages;
    isLast;
    constructor(moodLogs, total, page, limit) {
        this.moodLogs = moodLogs.map((moodLog) => (0, class_transformer_1.plainToInstance)(mood_log_response_1.MoodLogResponse, moodLog, { excludeExtraneousValues: true }));
        this.total = total;
        this.page = page;
        this.limit = limit;
        this.numberOfPages = Math.ceil(total / limit);
        this.isLast = page === this.numberOfPages;
    }
}
exports.FindMoodLogResponse = FindMoodLogResponse;
//# sourceMappingURL=find-mood-log.response.js.map