import { Directive, Input } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from "@angular/forms";

export function forbiddenInputValidator(inputRe: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const forbidden = inputRe.test(control.value)
        return forbidden ? { forbiddenInput: { value: control.value } } : null
    }
}
@Directive({
    selector: '[appForbiddenInput]',
    providers: [{ provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true }]
})


export class ForbiddenValidatorDirective implements Validator {
    @Input('appForbiddenInput') forbiddenInput = '';

    validate(control: AbstractControl): ValidationErrors | null {
        return this.forbiddenInput ? forbiddenInputValidator(new RegExp(this.forbiddenInput, 'i'))(control)
            : null;
    }
}

// export class CustomValidator {
//     specialCharValidator(control: FormControl): { [key: string]: boolean } {
//         const specialRegexp: RegExp = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/
//         if (control.value && specialRegexp.test(control.value)) {
//             return { invalidInput: true }
//         }
//     }
// }