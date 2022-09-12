import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { ResearchComponent } from './components/research/research.component';
import { PeopleComponent } from './components/people/people.component';
import { PublicationsComponent } from './components/publications/publications.component';
import { ParticipateComponent } from './components/participate/participate.component';
import { ContactComponent } from './components/contact/contact.component';
import { PublicLecturesComponent } from './components/public-lectures/public-lectures.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'research', component: ResearchComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'publications', component: PublicationsComponent },
  { path: 'participate', component: ParticipateComponent },
  { path: 'public-lectures', component: PublicLecturesComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
