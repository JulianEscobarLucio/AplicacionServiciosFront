import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})


export class SliderComponent implements OnInit {

  peliculas: any[] = [
    {name: 'Imagen 1',
    img: './assets/images/banner1.jpg',
    desc: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.'
     },
    {
      name: 'Imagen 2',
      img: './assets/images/banner2.jpg',
      desc: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.'

    },
    {
      name: 'Imagen 3',
      img: './assets/images/banner2.jpg',
      desc: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.'

    }
  ];

  constructor(private _config : NgbCarouselConfig) {
    _config.interval = 3000;
    _config.pauseOnHover = true;
    _config.showNavigationArrows = false;
  }


  ngOnInit() {
  }

}
