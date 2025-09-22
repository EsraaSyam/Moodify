import { IsNotEmpty, MinLength } from "class-validator";
import { IsNotNullOrUndefined } from "../validator/Is-not-null-or-undefined.decorator";

export class LoginRequest {
    @IsNotEmpty({ message: 'Email must not be empty' })
    @IsNotNullOrUndefined({ message: 'Email must not be null or undefined' })
    email: string;

    @IsNotEmpty({ message: 'Password must not be empty' })
    @MinLength(6, { message: 'Password is too short. Minimum length is $constraint1 characters' })
    password: string;
}