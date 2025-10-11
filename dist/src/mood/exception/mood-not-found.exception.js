"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoodNotFoundException = void 0;
const common_1 = require("@nestjs/common");
class MoodNotFoundException extends common_1.UnauthorizedException {
    constructor(id) {
        super(`Mood with ID '${id}' not found.`);
    }
}
exports.MoodNotFoundException = MoodNotFoundException;
//# sourceMappingURL=mood-not-found.exception.js.map