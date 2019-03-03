import { Component, OnInit } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from "rxjs";

import { ImageService } from './image.service';

import { PaginationComponent } from './pagination/pagination.component'

@Component({
  selector: 'app-web-projects',
  templateUrl: './web-projects.component.html',
  styleUrls: ['./web-projects.component.scss'],
  providers: [ImageService]
})
export class WebProjectsComponent implements OnInit {
  currentPage: number;
  private pageStream = new BehaviorSubject<number>(1);

  imgs: string[];

  imageService: ImageService;

  constructor(imageService: ImageService) {
    this.imageService = imageService;
    this.currentPage = 1;
  }

  ngOnInit() {
    this.pageStream.subscribe(page => {
      this.currentPage = page
      this.showImages();
    })
  }

  showImages() {
    this.imgs = this.imageService.getImagesForPage(this.currentPage);
  }

  goToPage(page: number) {
    this.pageStream.next(page)
  }

}
