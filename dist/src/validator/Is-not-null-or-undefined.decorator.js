"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsNotNullOrUndefined = IsNotNullOrUndefined;
const class_validator_1 = require("class-validator");
function IsNotNullOrUndefined(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'isNotNullOrUndefined',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [],
            options: validationOptions,
            validator: {
                validate(value) {
                    return value !== null && value !== undefined && value !== "null" && value !== "undefined";
                },
                defaultMessage: () => 'Value must not be null or undefined',
            },
        });
    };
}
//# sourceMappingURL=Is-not-null-or-undefined.decorator.js.map