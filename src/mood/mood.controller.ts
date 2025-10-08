import { Body, Controller, Delete, Get, Post, Res } from '@nestjs/common';
import { MoodService } from './mood.service';
import { MoodRequest } from './request/mood.request';
import { isValidId } from 'src/validator/is-valid-id.decorator';
import type { Response } from 'express';
import { MoodResponse } from './response/mood.response';
import { RolesDec } from 'src/auth/decorator/roles.decorator';
import { Roles } from 'src/user/role.enum';

@Controller('mood')
export class MoodController {
    constructor(
        private readonly moodService: MoodService,
    ) {}

    @Post()
    @RolesDec(Roles.ADMIN)
    async create(@Body() mood: MoodRequest, @Res() res: Response) {
        const createdMood = await this.moodService.createMood(mood);
        return res.status(201).json({
            message: 'Mood has been created successfully',
            data: new MoodResponse(createdMood),
        });
    }

    @Get()
    @RolesDec(Roles.ADMIN)
    async findAll(@Res() res: Response) {
        const moods = await this.moodService.findAll();
        return res.status(200).json({
            message: 'Moods have been retrieved successfully',
            data: moods.map(mood => new MoodResponse(mood)),
        });
    }

    @Get(':id')
    @RolesDec(Roles.ADMIN)
    async findById(@isValidId() id: number, @Res() res: Response) {
        const mood = await this.moodService.findById(id);
        return res.status(200).json({
            message: 'Mood has been retrieved successfully',
            data: new MoodResponse(mood),
        });
    }

    @Delete(':id')
    @RolesDec(Roles.ADMIN)
    async deleteById(@isValidId() id: number, @Res() res: Response) {
        await this.moodService.deleteById(id);
        return res.status(204).send();
    }
}
