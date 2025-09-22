import { IsNotEmpty, MinLength } from "class-validator";
import { IsNotNullOrUndefined } from "../validator/Is-not-null-or-undefined.decorator";

export class RegisterRequest {
    @IsNotEmpty({ message: 'Name must not be empty' })
    @IsNotNullOrUndefined({ message: 'Name must not be null or undefined' })
    name: string;

    @IsNotEmpty({ message: 'Email must not be empty' })
    @IsNotNullOrUndefined({ message: 'Email must not be null or undefined' })
    email: string;

    @IsNotEmpty({ message: 'Password must not be empty' })
    @MinLength(6, { message: 'Password is too short. Minimum length is $constraint1 characters' })
    password: string;
}