import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { createPasswordStregnthValidator } from '../validators/password-strength.validator';

@Component({
  selector: 'login',
  templateUrl: './login-reactive.component.html',
  styleUrls: ['./login-reactive.component.css']
})
export class LoginReactiveComponent implements OnInit {
  form = this.fb.group({
    email: [
      '',
      {
        updateOn: 'blur',
        validators: [Validators.required, Validators.email],
        asyncValidators: []
      }
    ],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(8),
        createPasswordStregnthValidator()
      ]
    ]
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

	get email() {
		return this.form.controls['email'];
	}

	get password() {
		return this.form.controls.password;
	}
}
