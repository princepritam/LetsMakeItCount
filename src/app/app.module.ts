import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider } from 'angularx-social-login';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { OverviewComponent } from './overview/overview.component';
import {MatDividerModule} from '@angular/material/divider';
import { ContactComponent } from './contact/contact.component';
import { EventsComponent } from './events/events.component';
import { CareersComponent } from './careers/careers.component';
import { BookingComponent } from './booking/booking.component';
import { TheTeamComponent } from './the-team/the-team.component';
import { CoachingComponent } from './coaching/coaching.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OverviewComponent,
    ContactComponent,
    EventsComponent,
    CareersComponent,
    BookingComponent,
    TheTeamComponent,
    CoachingComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    SocialLoginModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
