import { Component, OnInit } from "@angular/core";
import { NgForm, FormBuilder, FormGroup, Validators } from "@angular/forms";

import { AuthService } from "../auth.service";
import { MustMatch } from '../must-match.validator';

@Component({
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  isLoading = false;

  constructor(public authService: AuthService, private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        role: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required]
    }, {
        validator: MustMatch('password', 'confirmPassword')
    });
  }
  get f() { return this.registerForm.controls; }
  onSignup(form: NgForm) {
    this.submitted = true;
    if (this.registerForm.invalid) {
        return;
    }
    this.isLoading = true;
    this.authService.createUser(this.registerForm.value.email, this.registerForm.value.role, this.registerForm.value.password);
  }
}
