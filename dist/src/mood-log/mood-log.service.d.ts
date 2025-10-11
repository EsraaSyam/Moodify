import { MoodLogEntity } from './mood-log.entity';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/user/user.entity';
import { MoodEntity } from 'src/mood/mood.entity';
import { CreateMoodLogRequest } from './request/create-mood-log.request';
import { UpdateMoodLogRequest } from './request/update-mood-log.request';
import { FindMoodLogRequest } from './request/find-mood-log.request';
import { FindMoodLogResponse } from './response/find-mood-log.response';
import { GetMoodLogDistributionRequest } from './request/get-mood-log-distribution.request';
export declare class MoodLogService {
    private readonly moodLogRepository;
    private readonly userRepository;
    private readonly moodRepository;
    constructor(moodLogRepository: Repository<MoodLogEntity>, userRepository: Repository<UserEntity>, moodRepository: Repository<MoodEntity>);
    createMoodLog(data: CreateMoodLogRequest, userId: number): Promise<MoodLogEntity>;
    findAllByUserId(params: FindMoodLogRequest, userId: number): Promise<FindMoodLogResponse>;
    findById(id: number): Promise<MoodLogEntity | null>;
    deleteById(id: number): Promise<void>;
    updateById(id: number, updateData: UpdateMoodLogRequest, userId: number): Promise<MoodLogEntity>;
    getMoodLogDistribution(params: GetMoodLogDistributionRequest): Promise<{
        mood: any;
        count: number;
        percentage: string;
    }[]>;
    private buildMoodDistributionQuery;
    private calculateMoodPercentages;
}
