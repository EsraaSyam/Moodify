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
exports.MoodService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const mood_entity_1 = require("./mood.entity");
const typeorm_2 = require("typeorm");
const mood_not_found_exception_1 = require("./exception/mood-not-found.exception");
let MoodService = class MoodService {
    moodRepository;
    constructor(moodRepository) {
        this.moodRepository = moodRepository;
    }
    async createMood(mood) {
        const newMood = this.moodRepository.create(mood);
        return await this.moodRepository.save(newMood);
    }
    async findAll() {
        return await this.moodRepository.find();
    }
    async findById(id) {
        const mood = await this.moodRepository.findOne({ where: { id } });
        if (!mood) {
            throw new mood_not_found_exception_1.MoodNotFoundException(id);
        }
        return mood;
    }
    async deleteById(id) {
        await this.moodRepository.delete(id);
    }
};
exports.MoodService = MoodService;
exports.MoodService = MoodService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(mood_entity_1.MoodEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MoodService);
//# sourceMappingURL=mood.service.js.map