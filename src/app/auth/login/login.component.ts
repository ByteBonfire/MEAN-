import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginform!: FormGroup;
  constructor(private router: Router) {
    this.loginform = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }
  ngOnInit(): void {}

  login() {
    if (
      this.loginform.get('email')?.value &&
      this.loginform.get('password')?.value
    ) {
      localStorage.setItem(
        'loggedInUser',
        JSON.stringify(this.loginform.value)
      );
      localStorage.setItem('token', '12345');

      this.router.navigate(['/dashboard']);
    } else {
      alert('Enter the required Credential');
    }
  }
}
