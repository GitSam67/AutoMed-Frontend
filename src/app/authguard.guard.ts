import { CanActivateFn } from '@angular/router';
import { inject } from "@angular/core";
import { Router } from "@angular/router";

export const authguardGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);

  const canActivate = () => {
    const role = sessionStorage.getItem('role');
    if(role === "SuperAdmin") {
      return router.parseUrl('/superadmin');
    }
    else if(role == "StoreOwner") {
      return router.parseUrl('/storeowner');
    }
    else if(role == "Customer") {
      return router.parseUrl('/customerform');
    }

    return router.parseUrl('/login');
  };

  if (canActivate()) {
    return true;
  }
  else {
    return router.parseUrl('/login');
  }
};
