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
exports.MoodLogResponse = exports.MoodResponse = exports.UserResponse = void 0;
const class_transformer_1 = require("class-transformer");
class UserResponse {
    id;
    name;
    email;
}
exports.UserResponse = UserResponse;
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], UserResponse.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], UserResponse.prototype, "name", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], UserResponse.prototype, "email", void 0);
class MoodResponse {
    id;
    name;
}
exports.MoodResponse = MoodResponse;
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], MoodResponse.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MoodResponse.prototype, "name", void 0);
class MoodLogResponse {
    id;
    note;
    createdAt;
    user;
    mood;
}
exports.MoodLogResponse = MoodLogResponse;
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], MoodLogResponse.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], MoodLogResponse.prototype, "note", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Date)
], MoodLogResponse.prototype, "createdAt", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Type)(() => UserResponse),
    __metadata("design:type", UserResponse)
], MoodLogResponse.prototype, "user", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Type)(() => MoodResponse),
    __metadata("design:type", MoodResponse)
], MoodLogResponse.prototype, "mood", void 0);
//# sourceMappingURL=mood-log.response.js.map