import { Body, Controller, Delete, Get, Post, Put, Res } from '@nestjs/common';
import { MoodLogService } from './mood-log.service';
import { CreateMoodLogRequest } from './request/create-mood-log.request';
import type { Response } from 'express';
import { MoodLogResponse } from './response/mood-log.response';
import { plainToInstance } from 'class-transformer';
import { isValidId } from 'src/validator/is-valid-id.decorator';
import { MoodLogByUserResponse } from './response/get-mood-log-by-user.response';
import { UpdateDateColumn } from 'typeorm';
import { UpdateMoodLogRequest } from './request/update-mood-log.request';

@Controller('mood-log')
export class MoodLogController {
    constructor(
        private readonly moodLogService: MoodLogService,
    ) {}

    @Post()
    async createMoodLog(@Body() data: CreateMoodLogRequest, @Res() req: Response) {
        const moodLog = await this.moodLogService.createMoodLog(data);
        return req.status(201).json({
            message: 'Mood log has been created successfully',
            data: plainToInstance(MoodLogResponse, moodLog, { excludeExtraneousValues: true }),
        });
    }

    @Get("/user/:id")
    async getAllMoodLogsByUserId(@isValidId() id: number, @Res() req: Response) {
        const moodLogs = await this.moodLogService.findAllByUserId(id);
        return req.status(200).json({
            message: 'Mood logs have been retrieved successfully',
            data: plainToInstance(MoodLogByUserResponse, moodLogs, { excludeExtraneousValues: true }),
        });
    }

    @Get(':id')
    async getMoodLogById(@isValidId() id: number, @Res() req: Response) {
        const moodLog = await this.moodLogService.findById(id);
        return req.status(200).json({
            message: 'Mood log has been retrieved successfully',
            data: plainToInstance(MoodLogResponse, moodLog, { excludeExtraneousValues: true }),
        });
    }

    @Delete(':id')
    async deleteMoodLogById(@isValidId() id: number, @Res() req: Response) {
        await this.moodLogService.deleteById(id);
        return req.status(204).send();
    }


    @Put(':id')
    async updateMoodLogById(@isValidId() id: number, @Body() data: UpdateMoodLogRequest, @Res() req: Response) {
        const moodLog = await this.moodLogService.updateById(id, data);
        return req.status(200).json({
            message: 'Mood log has been updated successfully',
            data: plainToInstance(MoodLogResponse, moodLog, { excludeExtraneousValues: true }),
        });
    }

    
}
