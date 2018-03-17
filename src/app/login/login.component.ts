import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signinForm: FormGroup;
  pattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+$'
  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.signinForm = this.formBuilder.group({
      email: ['', Validators.required, Validators.pattern(this.pattern)],
      password: ['', Validators.required]
    });
  }

  onSubmit(){
    var email = this.signinForm.get('email').value;
    var password = this.signinForm.get('password').value;
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    this.router.navigate(['app']);
  }
}
