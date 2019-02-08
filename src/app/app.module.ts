import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AffichageVinComponent } from './affichage-vin/affichage-vin.component';

@NgModule({
  declarations: [
    AppComponent,
    AffichageVinComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
