"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoodLogNotFoundException = void 0;
const common_1 = require("@nestjs/common");
class MoodLogNotFoundException extends common_1.UnauthorizedException {
    constructor(id) {
        super(`Mood log with ID '${id}' not found.`);
    }
}
exports.MoodLogNotFoundException = MoodLogNotFoundException;
//# sourceMappingURL=mood-log-not-found.exception.js.map