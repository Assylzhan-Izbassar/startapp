import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './pages/hero/hero.component';
import { PainComponent } from './pages/pain/pain.component';
import { ServicesComponent } from './pages/services/services.component';
import { WhyComponent } from './pages/why/why.component';
import { ExpectComponent } from './pages/expect/expect.component';
import { ActionComponent } from './pages/action/action.component';
import { MainComponent } from './pages/main/main.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ThankYouComponent } from './pages/thank-you/thank-you.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    PainComponent,
    ServicesComponent,
    WhyComponent,
    ExpectComponent,
    ActionComponent,
    MainComponent,
    ContactUsComponent,
    ThankYouComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
