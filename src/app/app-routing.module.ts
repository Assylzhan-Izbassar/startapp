import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThankYouComponent } from './sections/thank-you/thank-you.component';
import { ContactUsComponent } from './sections/contact-us/contact-us.component';
import { MainComponent } from './sections/main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'thank-you', component: ThankYouComponent },
  { path: 'contact-us', component: ContactUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
