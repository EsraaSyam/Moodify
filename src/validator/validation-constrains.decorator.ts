import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';

@ValidatorConstraint({ name: 'DatesTogether', async: false })
export class DatesTogetherConstraint implements ValidatorConstraintInterface {
    validate(_: any, args: ValidationArguments) {
        const obj = args.object as any;
        const bothProvided = !!obj.startDate && !!obj.endDate;
        const noneProvided = !obj.startDate && !obj.endDate;
        return bothProvided || noneProvided; 
    }

    defaultMessage() {
        return 'You must provide both startDate and endDate together or omit both.';
    }
}