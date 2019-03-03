import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

import { ImageService } from './image.service';

@Component({
  selector: 'app-web-projects',
  templateUrl: './web-projects.component.html',
  styleUrls: ['./web-projects.component.scss'],
  providers: [ImageService]
})
export class WebProjectsComponent implements OnInit {
  currentPage: number;
  imgs: string[];

  imageService: ImageService;

  constructor(imageService: ImageService) {
    this.imageService = imageService;
    this.currentPage = 1;
  }

  ngOnInit() {
    this.showImages();
  }

  showImages() {
    this.imgs = this.imageService.getImagesForPage(this.currentPage);
  }

  selectPage(page: number) {
    this.currentPage = page;
    this.showImages();
  }

}
