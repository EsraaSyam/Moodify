import { MoodLogService } from './mood-log.service';
import { CreateMoodLogRequest } from './request/create-mood-log.request';
import type { Response } from 'express';
import { UpdateMoodLogRequest } from './request/update-mood-log.request';
import { FindMoodLogRequest } from './request/find-mood-log.request';
import { GetMoodLogDistributionRequest } from './request/get-mood-log-distribution.request';
export declare class MoodLogController {
    private readonly moodLogService;
    constructor(moodLogService: MoodLogService);
    createMoodLog(user: any, data: CreateMoodLogRequest, req: Response): Promise<Response<any, Record<string, any>>>;
    getAllMoodLogsByUserId(user: any, params: FindMoodLogRequest, req: Response): Promise<Response<any, Record<string, any>>>;
    getMoodLogById(id: number, req: Response): Promise<Response<any, Record<string, any>>>;
    deleteMoodLogById(id: number, req: Response): Promise<Response<any, Record<string, any>>>;
    updateMoodLogById(user: any, id: number, data: UpdateMoodLogRequest, req: Response): Promise<Response<any, Record<string, any>>>;
    getMoodLogDistribution(params: GetMoodLogDistributionRequest, req: Response): Promise<Response<any, Record<string, any>>>;
}
