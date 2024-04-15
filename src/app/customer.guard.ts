import { inject } from "@angular/core";
import { Router } from "@angular/router";

export const customerGuard =()=>{

  const router = inject(Router);

  const canActivate = () => {
    const role = sessionStorage.getItem('role');
    return role === 'Customer';
  };

  if (canActivate()) {
    return true;
  } else {
    return router.parseUrl('/login');
  }
};
