import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryComponent } from './components/country/country.component';
import { PortComponent } from './components/port/port.component';
import { ShipComponent } from './components/ship/ship.component';
import { VoyageComponent } from './components/voyage/voyage.component';
import { ShowCountryComponent } from './components/country/show-country/show-country.component';
import { AddEditCountryComponent } from './components/country/add-edit-country/add-edit-country.component';
import { CountryService } from './services/country/country.service';
import { PortService } from './services/port/port.service';
import { ShipService } from './services/ship/ship.service';
import { VoyageService } from './services/voyage/voyage.service';

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    PortComponent,
    ShipComponent,
    VoyageComponent,
    ShowCountryComponent,
    AddEditCountryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [CountryService, PortService, ShipService, VoyageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
