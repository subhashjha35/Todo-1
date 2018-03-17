import { Injectable } from "@angular/core";
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";

@Injectable()
export class LoginGuard implements CanActivate{
  
  email = localStorage.getItem('email');
  password = localStorage.getItem('password');
  constructor(private router: Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.email && this.password){
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
  
}