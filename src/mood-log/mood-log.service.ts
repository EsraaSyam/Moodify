import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MoodLogEntity } from './mood-log.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MoodLogService {
    constructor(
        @InjectRepository(MoodLogEntity)
        private readonly moodLogRepository: Repository<MoodLogEntity>,
    ) { }

    
}
