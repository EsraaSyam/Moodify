import { HttpException, HttpStatus } from "@nestjs/common";

export class InvalidCredentialsException extends HttpException {
  constructor() {
    super('Email or password is incorrect', HttpStatus.UNAUTHORIZED);
  }
}