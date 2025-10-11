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
exports.GetMoodLogDistributionRequest = void 0;
const class_validator_1 = require("class-validator");
const validation_constrains_decorator_1 = require("../../validator/validation-constrains.decorator");
class GetMoodLogDistributionRequest {
    userId;
    startDate;
    endDate;
    validateDates;
}
exports.GetMoodLogDistributionRequest = GetMoodLogDistributionRequest;
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], GetMoodLogDistributionRequest.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetMoodLogDistributionRequest.prototype, "startDate", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetMoodLogDistributionRequest.prototype, "endDate", void 0);
__decorate([
    (0, class_validator_1.Validate)(validation_constrains_decorator_1.DatesTogetherConstraint),
    __metadata("design:type", Boolean)
], GetMoodLogDistributionRequest.prototype, "validateDates", void 0);
//# sourceMappingURL=get-mood-log-distribution.request.js.map