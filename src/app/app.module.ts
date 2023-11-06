import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


// Components
import { CreditsComponent } from './components/credits/credits.component';
import { TitleComponent } from './components/title/title.component';

import { CompassComponent } from './components/compass/compass.component';
import { CompassConfigurationComponent } from './components/compass-configuration/compass-configuration.component';
import { PinConfigurationComponent } from './components/pin-configuration/pin-configuration.component';


// Services
import { CompassService } from './services/compass.service';


// PrimeNG Modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { SliderModule } from 'primeng/slider';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { InputSwitchModule } from 'primeng/inputswitch';

@NgModule({
  declarations: [
    AppComponent,
    CreditsComponent,
    TitleComponent,
    CompassConfigurationComponent,
    CompassComponent,
    PinConfigurationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    FormsModule,
    AccordionModule,
    SliderModule,
    InputTextModule,
    ButtonModule,
    InputSwitchModule,
  ],
  providers: [CompassService],
  bootstrap: [AppComponent]
})
export class AppModule { }
