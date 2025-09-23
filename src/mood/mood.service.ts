import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MoodEntity } from './mood.entity';
import { Repository } from 'typeorm';
import { MoodRequest } from './request/mood.request';
import { MoodNotFoundException } from './exception/mood-not-found.exception';

@Injectable()
export class MoodService {
    constructor(
        @InjectRepository(MoodEntity)
        private readonly moodRepository: Repository<MoodEntity>,
    ) { }

    async createMood(mood: MoodRequest): Promise<MoodEntity> {
        const newMood = this.moodRepository.create(mood);
        return await this.moodRepository.save(newMood);
    }

    async findAll(): Promise<MoodEntity[]> {
        return await this.moodRepository.find();
    }

    async findById(id: number): Promise<MoodEntity | null> {
        const mood = await this.moodRepository.findOne({ where: { id } });

        if (!mood) {
            throw new MoodNotFoundException(id);
        }

        return mood;
    }

    async deleteById(id: number): Promise<void> {
        await this.moodRepository.delete(id);
    }
}
