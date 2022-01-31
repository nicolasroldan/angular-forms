import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";
import { createPasswordStregnthValidator } from "../validators/password-strength.validator";

@Directive({
  selector: '[passwordStrength]',
	providers: [{ provide: NG_VALIDATORS, useExisting: PasswordStrengthDirecteive, multi: true }]
})
export class PasswordStrengthDirecteive implements Validator {
  validate(control: AbstractControl): ValidationErrors {
			return createPasswordStregnthValidator()(control);
	}
}