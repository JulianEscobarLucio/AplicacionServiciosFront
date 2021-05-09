import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})


export class SliderComponent implements OnInit {

  peliculas: any[] = [
    {name: '',
    img: './assets/images/banner1.PNG',
    desc: ''
     },
    {
      name: 'Imagen 2',
      img: './assets/images/banner2.PNG',
      desc: ''

    },
    {
      name: 'Imagen 3',
      img: './assets/images/banner3.PNG',
      desc: ''

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
