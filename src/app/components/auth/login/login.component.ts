import { Component, OnInit } from "@angular/core";
import { NgForm, FormBuilder, FormGroup, Validators  } from "@angular/forms";

import { AuthService } from "../auth.service";
import { MustMatch } from '../must-match.validator';

@Component({
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  isLoading = false;

  constructor(public authService: AuthService, private formBuilder: FormBuilder) {}

    ngOnInit() {
      this.registerForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
       });
  }
  get f() { return this.registerForm.controls; }
  onLogin(form: NgForm) {
    this.submitted = true;
    if (this.registerForm.invalid) {
        return;
    }

    this.isLoading = true;
    this.authService.login(this.registerForm.value.email, this.registerForm.value.password);
  }
}
