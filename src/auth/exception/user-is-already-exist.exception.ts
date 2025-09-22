import { HttpException, HttpStatus } from '@nestjs/common';

export class UserAlreadyExistException extends HttpException {
  constructor(identifier: string | number) {
    const message = `User with ${typeof identifier === 'number' ? 'ID' : 'email'} '${identifier}' already exist`;
    super(message, HttpStatus.NOT_FOUND);
  }
}