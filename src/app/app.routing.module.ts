import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AvantagesComponent} from './modules/avantages/avantages.component';
import {ExpertiseComponent} from './modules/expertise/expertise.component';
import {FaqComponent} from './modules/faq/faq.component';
import {FooterComponent} from './modules/footer/footer.component';
import {FormulaireComponent} from './modules/formulaire/formulaire.component';
import {NavbarComponent} from './modules/navbar/navbar.component';
import {PartenairesComponent} from './modules/partenaires/partenaires.component';
import {PourquoiComponent} from './modules/pourquoi/pourquoi.component';
import {PresentationComponent} from './modules/presentation/presentation.component';
import {TemoingnageComponent} from './modules/temoingnage/temoingnage.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'app',
  }, {
    path: 'navbar',
    component: NavbarComponent,
  }, {
    path: 'presentation',
    component: PresentationComponent,
  }, {
    path: 'temoingnage',
    component: TemoingnageComponent,
  }, {
    path: 'pourquoi',
    component: PourquoiComponent,
  }, {
    path: 'Avantages',
    component: AvantagesComponent,
  }
  , {
    path: 'Expertise',
    component: ExpertiseComponent,
  },
  {
    path: 'Formulaires',
    component: FormulaireComponent,
  },
  {
    path: 'faq',
    component: FaqComponent,
  }
  , {
    path: 'partenaires',
    component: PartenairesComponent,
  }, {
    path: 'footer',
    component: FooterComponent,
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
