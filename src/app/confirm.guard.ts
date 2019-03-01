import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class ConfirmGuard implements CanActivate {

  constructor(
    private router: Router
  ) {}

  canActivate() {
    if (window.confirm('Вы уверен, что хотите зайти?')) {
      return true; 
    }

    this.router.navigate(['/home']);
    return false;
  }

}
