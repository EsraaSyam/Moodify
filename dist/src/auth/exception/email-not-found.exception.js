"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailNotFoundException = void 0;
const common_1 = require("@nestjs/common");
class EmailNotFoundException extends common_1.UnauthorizedException {
    constructor() {
        super('Authentication failed: The provided email address is not registered.');
    }
}
exports.EmailNotFoundException = EmailNotFoundException;
//# sourceMappingURL=email-not-found.exception.js.map