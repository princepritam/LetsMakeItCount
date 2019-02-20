import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OverviewComponent } from './overview/overview.component';
import { BookingComponent } from './booking/booking.component';
import { CareersComponent } from './careers/careers.component';
import { CoachingComponent } from './coaching/coaching.component';
import { EventsComponent } from './events/events.component';
import { TheTeamComponent } from './the-team/the-team.component';
import { ContactComponent } from './contact/contact.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'overview', component: OverviewComponent},
  {path: 'booking', component: BookingComponent},
  {path: 'careers', component: CareersComponent},
  {path: 'coaching', component: CoachingComponent},
  {path: 'events', component: EventsComponent},
  {path: 'team', component: TheTeamComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
