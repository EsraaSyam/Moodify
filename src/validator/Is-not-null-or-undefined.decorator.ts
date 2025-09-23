import { registerDecorator, ValidationOptions } from "class-validator";

export function IsNotNullOrUndefined(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            name: 'isNotNullOrUndefined',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [],
            options: validationOptions,
            validator: {
                validate(value: any) {
                    return value !== null && value !== undefined && value !== "null" && value !== "undefined";
                },
                defaultMessage: () => 'Value must not be null or undefined',
            },
        });
    };

}