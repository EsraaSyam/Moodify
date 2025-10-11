"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResponse = void 0;
class UserResponse {
    id;
    name;
    email;
    role;
    constructor(user) {
        this.id = user.id;
        this.name = user.name;
        this.email = user.email;
        this.role = user.role;
    }
}
exports.UserResponse = UserResponse;
//# sourceMappingURL=user.response.js.map