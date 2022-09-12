import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { ResearchComponent } from './components/research/research.component';
import { PeopleComponent } from './components/people/people.component';
import { PublicationsComponent } from './components/publications/publications.component';
import { ParticipateComponent } from './components/participate/participate.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './components/people/profile/profile.component';
import { PublicLecturesComponent } from './components/public-lectures/public-lectures.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ResearchComponent,
    PeopleComponent,
    PublicationsComponent,
    ParticipateComponent,
    ContactComponent,
    HeaderComponent,
    ProfileComponent,
    PublicLecturesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
