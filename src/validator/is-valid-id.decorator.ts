import { BadRequestException, createParamDecorator, ExecutionContext } from "@nestjs/common";

export const isValidId = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest();
        const id = Number(request.params.id);
        if (id <= 0 || isNaN(id) || !Number.isInteger(id)) {
        throw new BadRequestException('ID must be a positive integer');
        }
        return id;
    },
)