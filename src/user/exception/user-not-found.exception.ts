import { HttpException, HttpStatus } from '@nestjs/common';

export class UserNotFoundException extends HttpException {
  constructor(identifier: string | number) {
    const message = `User with ${typeof identifier === 'number' ? 'ID' : 'email'} '${identifier}' not found`;
    super(message, HttpStatus.NOT_FOUND);
  }
}