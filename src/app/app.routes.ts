import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CustomerComponent } from './components/customercomponents/customer/customer.component';
import { CustomerformComponent } from './components/customercomponents/customerform/customerform.component';
import { OrdersComponent } from './components/customercomponents/orders/orders.component';
import { SuperadminComponent } from './components/superadmincomponents/superadmin/superadmin.component';
import { StoreownerformComponent } from './components/superadmincomponents/storeownerform/storeownerform.component';
import { StoreownerdetailsComponent } from './components/superadmincomponents/storeownerdetails/storeownerdetails.component';
import { BranchdetailsComponent } from './components/superadmincomponents/branchdetails/branchdetails.component';
import { BranchdetailsformComponent } from './components/superadmincomponents/branchdetailsform/branchdetailsform.component';
import { MedicinedetailsComponent } from './components/superadmincomponents/medicinedetails/medicinedetails.component';
import { MedicinedetailsformComponent } from './components/superadmincomponents/medicinedetailsform/medicinedetailsform.component';
import { StoreownerComponent } from './components/storeownercomponents/storeowner/storeowner.component';
import { InventoryComponent } from './components/storeownercomponents/inventory/inventory.component';
import { ReportsComponent } from './components/superadmincomponents/reports/reports.component';
import { BranchreportsComponent } from './components/storeownercomponents/branchreports/branchreports.component';
import { StoreownereditformComponent } from './components/superadmincomponents/storeownereditform/storeownereditform.component';
import { MedicineeditformComponent } from './components/superadmincomponents/medicineeditform/medicineeditform.component';
import { CartComponent } from './components/customercomponents/cart/cart.component';
import { customerGuard } from './customer.guard';
import { superadminGuard } from './superadmin.guard';
import { storeownerGuard } from './storeowner.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'customer', component: CustomerComponent, canActivate:[customerGuard]},
  { path: "superadmin", component: SuperadminComponent, canActivate:[superadminGuard]},
  { path: "storeownerdetails", component: StoreownerdetailsComponent, canActivate:[superadminGuard]},
  { path: "storeownerform", component: StoreownerformComponent, canActivate:[superadminGuard]},
  {path: "storeownereditform", component: StoreownereditformComponent, canActivate:[superadminGuard]},
  { path: "branchdetails", component: BranchdetailsComponent, canActivate:[superadminGuard]},
  { path: "branchdetailsform", component: BranchdetailsformComponent, canActivate:[superadminGuard]},
  { path: "medicinedetails", component: MedicinedetailsComponent, canActivate:[superadminGuard]},
  { path: "medicinedetailsform", component: MedicinedetailsformComponent, canActivate:[superadminGuard]},
  {path: "medicineeditform", component: MedicineeditformComponent, canActivate:[superadminGuard]},
  { path: "branchreports", component: BranchreportsComponent, canActivate:[storeownerGuard]},
  { path: "storeowner", component: StoreownerComponent, canActivate:[storeownerGuard]},
  { path: "inventory", component: InventoryComponent, canActivate:[storeownerGuard]},
  { path: "reports", component: ReportsComponent, canActivate:[superadminGuard]},
  { path: 'customerform', component: CustomerformComponent, canActivate:[customerGuard]},
  { path: 'orders', component: OrdersComponent, canActivate:[customerGuard]},
  {path: 'cart', component: CartComponent, canActivate:[customerGuard]},
  { path: '', redirectTo: '/register', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];
