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
exports.CreateMoodLogRequest = void 0;
const class_validator_1 = require("class-validator");
class CreateMoodLogRequest {
    note;
    moodId;
}
exports.CreateMoodLogRequest = CreateMoodLogRequest;
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateMoodLogRequest.prototype, "note", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'Mood ID must be a number' }),
    (0, class_validator_1.IsPositive)({ message: 'Mood ID must be a positive number' }),
    __metadata("design:type", Number)
], CreateMoodLogRequest.prototype, "moodId", void 0);
//# sourceMappingURL=create-mood-log.request.js.map