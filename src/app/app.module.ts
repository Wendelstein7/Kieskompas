import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { KompasComponent } from './kompas/kompas.component';
import { CreditsComponent } from './credits/credits.component';
import { TitleComponent } from './title/title.component';
import { CompassConfigurationComponent } from './components/compass-configuration/compass-configuration.component';

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
    KompasComponent,
    CreditsComponent,
    TitleComponent,
    CompassConfigurationComponent
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
