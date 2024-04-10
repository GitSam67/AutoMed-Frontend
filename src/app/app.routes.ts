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

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'customer', component: CustomerComponent},
  { path: "superadmin", component: SuperadminComponent},
  { path: "storeownerdetails", component: StoreownerdetailsComponent},
  { path: "storeownerform", component: StoreownerformComponent},
  {path: "storeownereditform", component: StoreownereditformComponent},
  { path: "branchdetails", component: BranchdetailsComponent},
  { path: "branchdetailsform", component: BranchdetailsformComponent},
  { path: "medicinedetails", component: MedicinedetailsComponent},
  { path: "medicinedetailsform", component: MedicinedetailsformComponent},
  {path: "medicineeditform", component: MedicineeditformComponent},
  { path: "branchreports", component: BranchreportsComponent},
  { path: "storeowner", component: StoreownerComponent},
  { path: "inventory", component: InventoryComponent},
  { path: "reports", component: ReportsComponent},
  { path: 'customerform', component: CustomerformComponent},
  { path: 'orders', component: OrdersComponent},
  {path: 'cart', component: CartComponent},
  { path: '', redirectTo: '/register', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];
