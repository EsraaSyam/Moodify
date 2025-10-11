import { MoodEntity } from './mood.entity';
import { Repository } from 'typeorm';
import { MoodRequest } from './request/mood.request';
export declare class MoodService {
    private readonly moodRepository;
    constructor(moodRepository: Repository<MoodEntity>);
    createMood(mood: MoodRequest): Promise<MoodEntity>;
    findAll(): Promise<MoodEntity[]>;
    findById(id: number): Promise<MoodEntity | null>;
    deleteById(id: number): Promise<void>;
}
