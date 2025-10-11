import { HttpException } from '@nestjs/common';
export declare class UserAlreadyExistException extends HttpException {
    constructor(identifier: string | number);
}
