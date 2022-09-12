import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

export interface Video {
  videoURL: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-public-lectures',
  templateUrl: './public-lectures.component.html',
  styleUrls: ['./public-lectures.component.scss']
})
export class PublicLecturesComponent implements OnInit {
    videos: Video[] = [];

    constructor(private _titleService: Title, private http: HttpClient) { }
    
    ngOnInit(): void {
        this._titleService.setTitle("Public Lectures | Sharp Lab")
        this.http.get('/assets/data/lectures.json').subscribe((data: Video[]) => {

            this.videos = data;

            // This code loads the IFrame Player API code asynchronously, according to the instructions at
            // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
            const tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';
            document.body.appendChild(tag);
        });
    }

    onReady() {

    }
}
