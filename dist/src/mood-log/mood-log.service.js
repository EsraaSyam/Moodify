"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoodLogService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const mood_log_entity_1 = require("./mood-log.entity");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../user/user.entity");
const mood_entity_1 = require("../mood/mood.entity");
const user_not_found_exception_1 = require("../user/exception/user-not-found.exception");
const mood_not_found_exception_1 = require("../mood/exception/mood-not-found.exception");
const mood_log_not_found_exception_1 = require("./exception/mood-log-not-found.exception");
const find_mood_log_response_1 = require("./response/find-mood-log.response");
let MoodLogService = class MoodLogService {
    moodLogRepository;
    userRepository;
    moodRepository;
    constructor(moodLogRepository, userRepository, moodRepository) {
        this.moodLogRepository = moodLogRepository;
        this.userRepository = userRepository;
        this.moodRepository = moodRepository;
    }
    async createMoodLog(data, userId) {
        const user = await this.userRepository.findOneBy({ id: userId });
        if (!user) {
            throw new user_not_found_exception_1.UserNotFoundException(userId);
        }
        const mood = await this.moodRepository.findOneBy({ id: data.moodId });
        if (!mood) {
            throw new mood_not_found_exception_1.MoodNotFoundException(data.moodId);
        }
        const moodLog = this.moodLogRepository.create({
            note: data.note,
            user,
            mood,
        });
        return await this.moodLogRepository.save(moodLog);
    }
    async findAllByUserId(params, userId) {
        const { page, limit, orderBy, orderDirection } = params;
        const offset = (page - 1) * limit;
        const user = await this.userRepository.findOneBy({ id: userId });
        if (!user) {
            throw new user_not_found_exception_1.UserNotFoundException(userId);
        }
        const [moodLogs, total] = await this.moodLogRepository.findAndCount({
            where: { user: { id: userId } },
            skip: offset,
            take: limit,
            order: { [orderBy]: orderDirection }
        });
        return new find_mood_log_response_1.FindMoodLogResponse(moodLogs, total, page, limit);
    }
    async findById(id) {
        const moodLog = await this.moodLogRepository.findOne({ where: { id } });
        if (!moodLog) {
            throw new mood_log_not_found_exception_1.MoodLogNotFoundException(id);
        }
        return moodLog;
    }
    async deleteById(id) {
        const result = await this.moodLogRepository.delete(id);
        if (result.affected === 0) {
            throw new mood_log_not_found_exception_1.MoodLogNotFoundException(id);
        }
    }
    async updateById(id, updateData, userId) {
        const moodLog = await this.moodLogRepository.findOne({
            where: { id, user: { id: userId } },
        });
        if (!moodLog) {
            throw new mood_log_not_found_exception_1.MoodLogNotFoundException(id);
        }
        if (updateData.moodId) {
            const mood = await this.moodRepository.findOne({
                where: { id: updateData.moodId },
            });
            if (!mood) {
                throw new mood_not_found_exception_1.MoodNotFoundException(updateData.moodId);
            }
            moodLog.mood = mood;
        }
        moodLog.note = updateData.note ?? moodLog.note;
        try {
            return await this.moodLogRepository.save(moodLog);
        }
        catch (error) {
            throw new Error(`Failed to update mood log: ${error.message}`);
        }
    }
    async getMoodLogDistribution(params) {
        const query = this.buildMoodDistributionQuery(params);
        const result = await query.getRawMany();
        return this.calculateMoodPercentages(result);
    }
    buildMoodDistributionQuery(params) {
        const query = this.moodLogRepository
            .createQueryBuilder('mood_logs')
            .select('mood_logs.mood', 'mood')
            .addSelect('COUNT(*)', 'count')
            .where('mood_logs.user_id = :userId', { userId: params.userId });
        if (params.startDate && params.endDate) {
            query.andWhere('mood_logs.created_at BETWEEN :startDate AND :endDate', {
                startDate: params.startDate,
                endDate: params.endDate,
            });
        }
        query.groupBy('mood_logs.mood');
        return query;
    }
    calculateMoodPercentages(result) {
        const total = result.reduce((sum, r) => sum + Number(r.count), 0);
        return result.map(r => ({
            mood: r.mood,
            count: Number(r.count),
            percentage: ((Number(r.count) / total) * 100).toFixed(1),
        }));
    }
};
exports.MoodLogService = MoodLogService;
exports.MoodLogService = MoodLogService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(mood_log_entity_1.MoodLogEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(mood_entity_1.MoodEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], MoodLogService);
//# sourceMappingURL=mood-log.service.js.map