import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  images = [
    'assets/images/slider/slider3.jpg',
    'assets/images/slider/slider1.jpg',
    'assets/images/slider/slider2.jpg'
  ];

  constructor() {}

  ngOnInit() {}

}
