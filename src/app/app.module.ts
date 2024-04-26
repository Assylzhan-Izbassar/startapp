import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './sections/hero/hero.component';
import { PainComponent } from './sections/pain/pain.component';
import { ServicesComponent } from './sections/services/services.component';
import { WhyComponent } from './sections/why/why.component';
import { ExpectComponent } from './sections/expect/expect.component';
import { ActionComponent } from './sections/action/action.component';
import { MainComponent } from './sections/main/main.component';
import { ContactUsComponent } from './sections/contact-us/contact-us.component';
import { ThankYouComponent } from './sections/thank-you/thank-you.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import {
  HttpClientModule,
  provideHttpClient,
  withFetch,
} from '@angular/common/http';
import { TimerComponent } from './components/timer/timer.component';
import { LastActionComponent } from './sections/last-action/last-action.component';

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
    FooterComponent,
    TimerComponent,
    LastActionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [provideClientHydration(), provideHttpClient(withFetch())],
  bootstrap: [AppComponent],
})
export class AppModule {}
