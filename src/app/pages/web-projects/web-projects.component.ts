import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-projects',
  templateUrl: './web-projects.component.html',
  styleUrls: ['./web-projects.component.scss']
})
export class WebProjectsComponent implements OnInit {
  fileNames = ['people-woman-coffee-meeting.jpg','pexels-photo-1451449.jpeg','startup-photos (2).jpg','pexels-photo-1036641.jpeg','pexels-photo-416405.jpeg','startup-photos.jpg','pexels-photo-1260309.jpeg','pexels-photo-669615.jpeg','pexels-photo-1266012.jpeg','startup-photos (1).jpg']

  constructor() { }

  ngOnInit() {
  }

}
