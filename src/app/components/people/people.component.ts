import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { Profile } from './profile/profile.component';
import { take } from 'rxjs/operators';
import { Subscription } from 'rxjs';

export class LabStaff {
  RAs: Profile[];
  alumni: Profile[];
  collaborators: Profile[];
  gradStudents: Profile[];
  underGrads: Profile[]
}

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription[] = [];

  sections: {
    title: string,
    profiles: Profile[]
  };

  constructor(private http: HttpClient, private _titleService: Title) { }

  ngOnInit() {
    this._titleService.setTitle("People | Sharp Lab");

    this.subscriptions.push(
      this.http.get('/assets/data/people.json').pipe(take(1)).subscribe((data: { title: string, profiles: Profile[] }) => {
        this.sections = data;
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
