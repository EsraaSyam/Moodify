import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MoodLogEntity } from './mood-log.entity';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/user/user.entity';
import { MoodEntity } from 'src/mood/mood.entity';
import { CreateMoodLogRequest } from './request/create-mood-log.request';
import { UserNotFoundException } from 'src/user/exception/user-not-found.exception';
import { MoodNotFoundException } from 'src/mood/exception/mood-not-found.exception';
import { MoodLogNotFoundException } from './exception/mood-log-not-found.exception';
import { UpdateMoodLogRequest } from './request/update-mood-log.request';

@Injectable()
export class MoodLogService {
    constructor(
        @InjectRepository(MoodLogEntity)
        private readonly moodLogRepository: Repository<MoodLogEntity>,

        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,

        @InjectRepository(MoodEntity)
        private readonly moodRepository: Repository<MoodEntity>,
    ) { }

    async createMoodLog(data: CreateMoodLogRequest): Promise<MoodLogEntity> {
        const user = await this.userRepository.findOneBy({ id: data.userId });

        if (!user) {
            throw new UserNotFoundException(data.userId);
        }

        const mood = await this.moodRepository.findOneBy({ id: data.moodId });

        if (!mood) {
            throw new MoodNotFoundException(data.moodId);
        }

        const moodLog = this.moodLogRepository.create({
            note: data.note,
            user,
            mood,
        });

        return await this.moodLogRepository.save(moodLog);
    }

    async findAllByUserId(userId: number): Promise<MoodLogEntity[]> {
        const user = await this.userRepository.findOneBy({ id: userId });

        if (!user) {
            throw new UserNotFoundException(userId);
        }

        return await this.moodLogRepository.find({
            where: { user: { id: userId } },
            order: { createdAt: 'DESC' },
        });
    }

    async findById(id: number): Promise<MoodLogEntity | null> {
        const moodLog = await this.moodLogRepository.findOne({ where: { id } });

        if (!moodLog) {
            throw new MoodLogNotFoundException(id);
        }

        return moodLog;
    }

    async deleteById(id: number): Promise<void> {
        const result = await this.moodLogRepository.delete(id);

        if (result.affected === 0) {
            throw new MoodLogNotFoundException(id);
        }
    }


    async updateById(id: number, updateData: UpdateMoodLogRequest): Promise<MoodLogEntity> {
        const moodLog = await this.moodLogRepository.findOne({
            where: { id, user: { id: updateData.userId } },
        });

        if (!moodLog) {
            throw new MoodLogNotFoundException(id);
        }

        if (updateData.moodId) {
            const mood = await this.moodRepository.findOne({
                where: { id: updateData.moodId },
            });

            if (!mood) {
                throw new MoodNotFoundException(updateData.moodId);
            }

            moodLog.mood = mood; 
        }

        moodLog.note = updateData.note ?? moodLog.note;

        try {
            return await this.moodLogRepository.save(moodLog);
        } catch (error) {
            throw new Error(`Failed to update mood log: ${error.message}`);
        }
    }

}
