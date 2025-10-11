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
exports.MoodLogController = void 0;
const common_1 = require("@nestjs/common");
const mood_log_service_1 = require("./mood-log.service");
const create_mood_log_request_1 = require("./request/create-mood-log.request");
const mood_log_response_1 = require("./response/mood-log.response");
const class_transformer_1 = require("class-transformer");
const is_valid_id_decorator_1 = require("../validator/is-valid-id.decorator");
const update_mood_log_request_1 = require("./request/update-mood-log.request");
const find_mood_log_request_1 = require("./request/find-mood-log.request");
const get_mood_log_distribution_request_1 = require("./request/get-mood-log-distribution.request");
const current_user_decorator_1 = require("../auth/decorator/current-user.decorator");
const roles_decorator_1 = require("../auth/decorator/roles.decorator");
const role_enum_1 = require("../user/role.enum");
let MoodLogController = class MoodLogController {
    moodLogService;
    constructor(moodLogService) {
        this.moodLogService = moodLogService;
    }
    async createMoodLog(user, data, req) {
        const moodLog = await this.moodLogService.createMoodLog(data, user.id);
        return req.status(201).json({
            message: 'Mood log has been created successfully',
            data: (0, class_transformer_1.plainToInstance)(mood_log_response_1.MoodLogResponse, moodLog, { excludeExtraneousValues: true }),
        });
    }
    async getAllMoodLogsByUserId(user, params, req) {
        const moodLogs = await this.moodLogService.findAllByUserId(params, user.id);
        return req.status(200).json({
            message: 'Mood logs have been retrieved successfully',
            data: moodLogs,
        });
    }
    async getMoodLogById(id, req) {
        const moodLog = await this.moodLogService.findById(id);
        return req.status(200).json({
            message: 'Mood log has been retrieved successfully',
            data: (0, class_transformer_1.plainToInstance)(mood_log_response_1.MoodLogResponse, moodLog, { excludeExtraneousValues: true }),
        });
    }
    async deleteMoodLogById(id, req) {
        await this.moodLogService.deleteById(id);
        return req.status(204).send();
    }
    async updateMoodLogById(user, id, data, req) {
        const moodLog = await this.moodLogService.updateById(id, data, user.id);
        return req.status(200).json({
            message: 'Mood log has been updated successfully',
            data: (0, class_transformer_1.plainToInstance)(mood_log_response_1.MoodLogResponse, moodLog, { excludeExtraneousValues: true }),
        });
    }
    async getMoodLogDistribution(params, req) {
        const distribution = await this.moodLogService.getMoodLogDistribution(params);
        return req.status(200).json({
            message: 'Mood log distribution has been retrieved successfully',
            data: distribution,
        });
    }
};
exports.MoodLogController = MoodLogController;
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.RolesDec)(role_enum_1.Roles.USER),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_mood_log_request_1.CreateMoodLogRequest, Object]),
    __metadata("design:returntype", Promise)
], MoodLogController.prototype, "createMoodLog", null);
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.RolesDec)(role_enum_1.Roles.USER),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Query)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, find_mood_log_request_1.FindMoodLogRequest, Object]),
    __metadata("design:returntype", Promise)
], MoodLogController.prototype, "getAllMoodLogsByUserId", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.RolesDec)(role_enum_1.Roles.USER),
    __param(0, (0, is_valid_id_decorator_1.isValidId)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], MoodLogController.prototype, "getMoodLogById", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.RolesDec)(role_enum_1.Roles.USER),
    __param(0, (0, is_valid_id_decorator_1.isValidId)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], MoodLogController.prototype, "deleteMoodLogById", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, roles_decorator_1.RolesDec)(role_enum_1.Roles.USER),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, is_valid_id_decorator_1.isValidId)()),
    __param(2, (0, common_1.Body)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, update_mood_log_request_1.UpdateMoodLogRequest, Object]),
    __metadata("design:returntype", Promise)
], MoodLogController.prototype, "updateMoodLogById", null);
__decorate([
    (0, common_1.Get)("analytics/distribution"),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_mood_log_distribution_request_1.GetMoodLogDistributionRequest, Object]),
    __metadata("design:returntype", Promise)
], MoodLogController.prototype, "getMoodLogDistribution", null);
exports.MoodLogController = MoodLogController = __decorate([
    (0, common_1.Controller)('mood-log'),
    __metadata("design:paramtypes", [mood_log_service_1.MoodLogService])
], MoodLogController);
//# sourceMappingURL=mood-log.controller.js.map