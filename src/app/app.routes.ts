import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CustomerComponent } from './components/customercomponents/customer/customer.component';
import { CartComponent } from './components/customercomponents/cart/cart.component';
import { CustomerformComponent } from './components/customercomponents/customerform/customerform.component';
import { OrdersComponent } from './components/customercomponents/orders/orders.component';
import { SuperadminComponent } from './components/superadmincomponents/superadmin/superadmin.component';
import { StoreownerComponent } from './components/superadmincomponents/storeownerdetails/storeownerdetails.component';
import { StoreownerformComponent } from './components/superadmincomponents/storeownerform/storeownerform.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'customer', component: CustomerComponent},
  { path: "superadmin", component: SuperadminComponent},
  { path: "storeownerdetails", component: StoreownerComponent},
  { path: "storeownerform", component: StoreownerformComponent},
  { path: 'cart', component: CartComponent},
  { path: 'customerform', component: CustomerformComponent},
  { path: 'orders', component: OrdersComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
  { path: '**', redirectTo: '/login' }
];
