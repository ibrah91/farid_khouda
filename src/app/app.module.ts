import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {PresentationComponent} from './modules/presentation/presentation.component';
import {TemoingnageComponent} from './modules/temoingnage/temoingnage.component';
import {PourquoiComponent} from './modules/pourquoi/pourquoi.component';
import {AvantagesComponent} from './modules/avantages/avantages.component';
import {ExpertiseComponent} from './modules/expertise/expertise.component';
import {PartenairesComponent} from './modules/partenaires/partenaires.component';
import {FaqComponent} from './modules/faq/faq.component';
import {FooterComponent} from './modules/footer/footer.component';
import {NavbarComponent} from './modules/navbar/navbar.component';
import {AppRoutingModule} from './app.routing.module';
import {APP_BASE_HREF} from '@angular/common';
import {FormulaireComponent} from './modules/formulaire/formulaire.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRippleModule} from '@angular/material/core';
import {MatStepperModule} from '@angular/material/stepper'

import {FormlyModule} from '@ngx-formly/core';
import {FormlyFormOptions, FormlyFieldConfig} from '@ngx-formly/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';







@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PresentationComponent,
    TemoingnageComponent,
    PourquoiComponent,
    AvantagesComponent,
    ExpertiseComponent,
    PartenairesComponent,
    FaqComponent,
    FooterComponent,
    FormulaireComponent,

  ],
  imports: [
    BrowserModule,
     AppRoutingModule,
    BrowserAnimationsModule,
     MatInputModule,
      MatCheckboxModule,
      MatButtonModule,
      MatFormFieldModule,
      MatRippleModule,
      MatStepperModule,
      FormsModule,
      ReactiveFormsModule,
      FormlyModule,
      FormlyModule.forRoot({
        validationMessages: [
          { name: 'required', message: 'This field is required' },
        ],
      }),


  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatStepperModule
  ],
  providers: [  { provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent]
})
export class AppModule {

 }

