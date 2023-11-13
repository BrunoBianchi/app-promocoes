import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
export const authGuard: CanActivateFn = (route, state) => {
  let router = new Router();
  let user = JSON.parse(localStorage.getItem('user')!!);
  if (user) {
    return true;
  } else {
    router.navigateByUrl('sign-in');
    return false;
  }
};
