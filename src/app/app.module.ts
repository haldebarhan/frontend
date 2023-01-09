import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ApproDistComponent } from './components/appro-dist/appro-dist.component';
import { ArchiBetComponent } from './components/archi-bet/archi-bet.component';
import { AssuranceMaladieComponent } from './components/assurance-maladie/assurance-maladie.component';
import { CaisseComponent } from './components/caisse/caisse.component';
import { CommerciauxComponent } from './components/commerciaux/commerciaux.component';
import { ContactComponent } from './components/contact/contact.component';
import { CotationComponent } from './components/cotation/cotation.component';
import { DemoComponent } from './components/demo/demo.component';
import { DemonstrationComponent } from './components/demonstration/demonstration.component';
import { EssaiComponent } from './components/essai/essai.component';
import { EssayageComponent } from './components/essayage/essayage.component';
import { FooterComponent } from './components/footer/footer.component';
import { FourOhFourComponent } from './components/four-oh-four/four-oh-four.component';
import { GestionCreditComponent } from './components/gestion-credit/gestion-credit.component';
import { HomeComponent } from './components/home/home.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { ImmobilierComponent } from './components/immobilier/immobilier.component';
import { LocativeComponent } from './components/locative/locative.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ServiceComponent } from './components/service/service.component';
import { SuiviArchitecteComponent } from './components/suivi-architecte/suivi-architecte.component';
import { SuiviEntrepreneurComponent } from './components/suivi-entrepreneur/suivi-entrepreneur.component';
import { TransfertArgentComponent } from './components/transfert-argent/transfert-argent.component';
import {HttpClientModule} from '@angular/common/http'
import { SolutionService } from './services/solutions.service';
import { Mailer } from './services/sendMail.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'solution/locative', component: LocativeComponent},
  {path: 'solution/hotel', component: HotelComponent},
  {path: 'solution/immobiliere', component: ImmobilierComponent},
  {path: 'solution/caisse', component: CaisseComponent},
  {path: 'solution/appro', component: ApproDistComponent},
  {path: 'solution/credit', component: GestionCreditComponent},
  {path: 'solution/transfert', component: TransfertArgentComponent},
  {path: 'solution/assurance', component: AssuranceMaladieComponent},
  {path: 'solution/archi', component: ArchiBetComponent},
  {path: 'solution/suiviarch', component: SuiviArchitecteComponent},
  {path: 'solution/suivientr', component: SuiviEntrepreneurComponent},
  {path: 'solution/vente', component: CommerciauxComponent},
  {path: 'societe', component: AboutUsComponent},
  {path: 'essai/:solutionId', component: EssaiComponent},
  {path: 'demo/:solutionId', component: DemoComponent},
  {path: 'service', component: ServiceComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'demonstration', component: DemonstrationComponent},
  {path: 'essayage', component: EssayageComponent},
  {path: 'cotation', component: CotationComponent},
  {path: 'not-found', component: FourOhFourComponent},
  {path: '**', redirectTo: '/not-found'}
]
@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ApproDistComponent,
    ArchiBetComponent,
    AssuranceMaladieComponent,
    CaisseComponent,
    CommerciauxComponent,
    ContactComponent,
    CotationComponent,
    DemoComponent,
    DemonstrationComponent,
    EssaiComponent,
    EssayageComponent,
    FooterComponent,
    FourOhFourComponent,
    GestionCreditComponent,
    HomeComponent,
    HotelComponent,
    ImmobilierComponent,
    LocativeComponent,
    NavbarComponent,
    ServiceComponent,
    SuiviArchitecteComponent,
    SuiviEntrepreneurComponent,
    TransfertArgentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SolutionService, Mailer],
  bootstrap: [AppComponent]
})
export class AppModule { }
