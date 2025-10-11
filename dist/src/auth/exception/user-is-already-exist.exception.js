"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAlreadyExistException = void 0;
const common_1 = require("@nestjs/common");
class UserAlreadyExistException extends common_1.HttpException {
    constructor(identifier) {
        const message = `User with ${typeof identifier === 'number' ? 'ID' : 'email'} '${identifier}' already exist`;
        super(message, common_1.HttpStatus.NOT_FOUND);
    }
}
exports.UserAlreadyExistException = UserAlreadyExistException;
//# sourceMappingURL=user-is-already-exist.exception.js.map