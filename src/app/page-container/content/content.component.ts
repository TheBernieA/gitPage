import { Component, OnInit } from '@angular/core';
import { FRAMEWORKS, LANGUAGES } from 'src/app/models/mock-page-data';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  carousel: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 800,
    navText:['',''],
    autoplay: true,
    responsive:{
      0:{
        items: 2
      },
      680:{
        items: 3
      },
      1000:{
        items: 4
      },
    },
    nav: true
  }

  languages = LANGUAGES;

  frameworks = FRAMEWORKS;

  constructor() { }

  ngOnInit(): void {

  }
  

}
