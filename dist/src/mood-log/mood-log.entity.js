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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoodLogEntity = void 0;
const mood_entity_1 = require("../mood/mood.entity");
const user_entity_1 = require("../user/user.entity");
const typeorm_1 = require("typeorm");
let MoodLogEntity = class MoodLogEntity {
    id;
    note;
    user;
    mood;
    createdAt;
};
exports.MoodLogEntity = MoodLogEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], MoodLogEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], MoodLogEntity.prototype, "note", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, user => user.moodLogs, { onDelete: 'CASCADE', eager: true }),
    __metadata("design:type", user_entity_1.UserEntity)
], MoodLogEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => mood_entity_1.MoodEntity, mood => mood.moodLogs, { onDelete: 'SET NULL', eager: true }),
    __metadata("design:type", mood_entity_1.MoodEntity)
], MoodLogEntity.prototype, "mood", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], MoodLogEntity.prototype, "createdAt", void 0);
exports.MoodLogEntity = MoodLogEntity = __decorate([
    (0, typeorm_1.Entity)("mood_logs")
], MoodLogEntity);
//# sourceMappingURL=mood-log.entity.js.map