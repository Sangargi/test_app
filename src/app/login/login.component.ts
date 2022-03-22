import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  focusEmail = false;
  focusPass = false;
  _focus = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      reminder: [false]
    });
  }

  ngOnInit(): void {
    localStorage.setItem('email','');
  }

  get form(): any { return this.loginForm['controls']; }

  sendForm() {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.valid) {
      console.log('OK ->', this.loginForm.value);
      localStorage.setItem('email', JSON.stringify(this.form.email.value));
      this.router.navigate(['/home']);
    } else {
      console.log('NO OK ->', this.loginForm.value);
    }
  }
}
