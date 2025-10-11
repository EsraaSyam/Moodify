import { ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
export declare class DatesTogetherConstraint implements ValidatorConstraintInterface {
    validate(_: any, args: ValidationArguments): boolean;
    defaultMessage(): string;
}
