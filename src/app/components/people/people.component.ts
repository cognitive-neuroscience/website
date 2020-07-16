import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Person {
  bio: string;
  name: string;
  photoPath: string;
}

export class LabStaff {
  RAs: Person[];
  alumni: Person[];
  collaborators: Person[];
  gradStudents: Person[];
  underGrads: Person[]
}

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  gradStudents: Person[] = [];
  RAs: Person[] = [];
  underGrads: Person[] = [];
  alumni: Person[] = [];
  collaborators: Person[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/assets/data/people.json').subscribe((data: any) => {
      this.gradStudents = data.gradStudents;
      this.RAs = data.RAs;
      this.underGrads = data.underGrads;
      this.alumni = data.alumni;
      this.collaborators = data.collaborators;
    });
  }
}
