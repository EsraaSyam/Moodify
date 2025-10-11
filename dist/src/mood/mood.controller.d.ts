import { MoodService } from './mood.service';
import { MoodRequest } from './request/mood.request';
import type { Response } from 'express';
export declare class MoodController {
    private readonly moodService;
    constructor(moodService: MoodService);
    create(mood: MoodRequest, res: Response): Promise<Response<any, Record<string, any>>>;
    findAll(res: Response): Promise<Response<any, Record<string, any>>>;
    findById(id: number, res: Response): Promise<Response<any, Record<string, any>>>;
    deleteById(id: number, res: Response): Promise<Response<any, Record<string, any>>>;
}
