import { IsNotEmpty } from "class-validator";
import { IsNotNullOrUndefined } from "src/validator/Is-not-null-or-undefined.decorator";

export class MoodRequest {
    @IsNotEmpty({ message: 'Name must not be empty' })
    @IsNotNullOrUndefined({ message: 'Name must not be null or undefined' })
    name: string;
}