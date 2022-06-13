import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { EnquiryFormComponent } from './pages/home/enquiry-form/enquiry-form.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/home/services/details/details.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"about", component:AboutComponent},
  {path:"contact", component:ContactComponent},
  {path:"home/:id",component:DetailsComponent},
  {path:"contact/enquiry",component:EnquiryFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
