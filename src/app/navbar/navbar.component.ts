import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  emailString = localStorage.getItem('email');
  passwordString = localStorage.getItem('password');

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLogout(){
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    this.router.navigate(['home']);
  }

}
