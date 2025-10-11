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
exports.RegisterRequest = void 0;
const class_validator_1 = require("class-validator");
const Is_not_null_or_undefined_decorator_1 = require("../../validator/Is-not-null-or-undefined.decorator");
class RegisterRequest {
    name;
    email;
    password;
}
exports.RegisterRequest = RegisterRequest;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Name must not be empty' }),
    (0, Is_not_null_or_undefined_decorator_1.IsNotNullOrUndefined)({ message: 'Name must not be null or undefined' }),
    __metadata("design:type", String)
], RegisterRequest.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Email must not be empty' }),
    (0, Is_not_null_or_undefined_decorator_1.IsNotNullOrUndefined)({ message: 'Email must not be null or undefined' }),
    __metadata("design:type", String)
], RegisterRequest.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Password must not be empty' }),
    (0, class_validator_1.MinLength)(6, { message: 'Password is too short. Minimum length is $constraint1 characters' }),
    __metadata("design:type", String)
], RegisterRequest.prototype, "password", void 0);
//# sourceMappingURL=register.request.js.map