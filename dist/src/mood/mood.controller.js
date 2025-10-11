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
exports.MoodController = void 0;
const common_1 = require("@nestjs/common");
const mood_service_1 = require("./mood.service");
const mood_request_1 = require("./request/mood.request");
const is_valid_id_decorator_1 = require("../validator/is-valid-id.decorator");
const mood_response_1 = require("./response/mood.response");
const roles_decorator_1 = require("../auth/decorator/roles.decorator");
const role_enum_1 = require("../user/role.enum");
let MoodController = class MoodController {
    moodService;
    constructor(moodService) {
        this.moodService = moodService;
    }
    async create(mood, res) {
        const createdMood = await this.moodService.createMood(mood);
        return res.status(201).json({
            message: 'Mood has been created successfully',
            data: new mood_response_1.MoodResponse(createdMood),
        });
    }
    async findAll(res) {
        const moods = await this.moodService.findAll();
        return res.status(200).json({
            message: 'Moods have been retrieved successfully',
            data: moods.map(mood => new mood_response_1.MoodResponse(mood)),
        });
    }
    async findById(id, res) {
        const mood = await this.moodService.findById(id);
        return res.status(200).json({
            message: 'Mood has been retrieved successfully',
            data: new mood_response_1.MoodResponse(mood),
        });
    }
    async deleteById(id, res) {
        await this.moodService.deleteById(id);
        return res.status(204).send();
    }
};
exports.MoodController = MoodController;
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.RolesDec)(role_enum_1.Roles.ADMIN),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mood_request_1.MoodRequest, Object]),
    __metadata("design:returntype", Promise)
], MoodController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.RolesDec)(role_enum_1.Roles.ADMIN),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MoodController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.RolesDec)(role_enum_1.Roles.ADMIN),
    __param(0, (0, is_valid_id_decorator_1.isValidId)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], MoodController.prototype, "findById", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.RolesDec)(role_enum_1.Roles.ADMIN),
    __param(0, (0, is_valid_id_decorator_1.isValidId)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], MoodController.prototype, "deleteById", null);
exports.MoodController = MoodController = __decorate([
    (0, common_1.Controller)('mood'),
    __metadata("design:paramtypes", [mood_service_1.MoodService])
], MoodController);
//# sourceMappingURL=mood.controller.js.map