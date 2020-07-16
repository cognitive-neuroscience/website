import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';

export class Paper {
  authors: string;
  publication: string;
  status: string;
  title: string;
}

export class Preprint {
  authors: string;
  link: string;
  title: string;
}

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit {

  papers: Paper[] = [];
  preprints: Preprint[] = [];

  constructor(private http: HttpClient, private _titleService: Title) { }

  ngOnInit() {
    this._titleService.setTitle("Publications | Sharp Lab")
    this.http.get('/assets/data/papers.json').subscribe((data: {papers: Paper[], preprints: Preprint[]}) => {
      this.preprints = data.preprints;
      this.papers = data.papers;
    });
  }

}