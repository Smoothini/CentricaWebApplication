import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {StoreComponent} from './store/store.component';
import {SalespersonComponent} from './salesperson/salesperson.component';

const routes: Routes = [
  {path:'store', component:StoreComponent},
  {path:'salesperson', component:SalespersonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }