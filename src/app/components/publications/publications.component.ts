import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit {

  papers = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/assets/data/papers.json').subscribe((data: any) => {
      this.papers = data.papers;
    });
  }

}
