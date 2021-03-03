import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalespersonComponent } from './salesperson/salesperson.component';
import { StoreComponent } from './store/store.component';
import { DistrictComponent } from './district/district.component';
import { ShowStoreComponent } from './store/show-store/show-store.component';
import { AddEditStoreComponent } from './store/add-edit-store/add-edit-store.component';
import { ShowSpComponent } from './salesperson/show-sp/show-sp.component';
import { AddEditSpComponent } from './salesperson/add-edit-sp/add-edit-sp.component';
import {SharedService} from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ShowDistrictComponent } from './district/show-district/show-district.component';
import { SspDistrictComponent } from './district/ssp-district/ssp-district.component';
import { AddEditDistrictComponent } from './district/add-edit-district/add-edit-district.component';

@NgModule({
  declarations: [
    AppComponent,
    SalespersonComponent,
    StoreComponent,
    DistrictComponent,
    ShowStoreComponent,
    AddEditStoreComponent,
    ShowSpComponent,
    AddEditSpComponent,
    ShowDistrictComponent,
    SspDistrictComponent,
    AddEditDistrictComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
