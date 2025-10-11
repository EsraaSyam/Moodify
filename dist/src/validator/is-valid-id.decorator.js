"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidId = void 0;
const common_1 = require("@nestjs/common");
exports.isValidId = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    const id = Number(request.params.id);
    if (id <= 0 || isNaN(id) || !Number.isInteger(id)) {
        throw new common_1.BadRequestException('ID must be a positive integer');
    }
    return id;
});
//# sourceMappingURL=is-valid-id.decorator.js.map