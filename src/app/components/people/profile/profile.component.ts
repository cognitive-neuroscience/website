import { Component, Input, OnInit } from '@angular/core';

export interface Profile {
  name: string;
  blurb: string;
  photoPath: string;
  email: string;
  showImage: boolean;
  compress: boolean; // flag indicating whether to reduce the spacing from top/bottom
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input()
  profiles: Profile[] = [];

  constructor() { }

  ngOnInit() {
  }

}
