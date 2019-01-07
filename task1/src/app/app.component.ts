import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isNavbarCollapsed = true;

  page = 4;


  cards = [
    {image: 'assets/images/card/card1.jpg', icon: 'assets/images/icon/new.png', status: 'new'},
    {image: 'assets/images/card/card2.jpg', icon: 'assets/images/icon/used.png', status: 'used'},
    {image: 'assets/images/card/card3.jpg', icon: 'assets/images/icon/unchecked.png', status: 'unchecked'},
    {image: 'assets/images/card/card4.jpg', icon: 'assets/images/icon/new.png', status: 'new'},
    {image: 'assets/images/card/card6.jpg', icon: 'assets/images/icon/unchecked.png', status: 'unchecked'},
    {image: 'assets/images/card/card7.jpg', icon: 'assets/images/icon/new.png', status: 'new'},
    {image: 'assets/images/card/card9.jpg', icon: 'assets/images/icon/unchecked.png', status: 'unchecked'},
    {image: 'assets/images/card/card1.jpg', icon: 'assets/images/icon/new.png', status: 'new'},
    {image: 'assets/images/card/card1.jpg', icon: 'assets/images/icon/new.png', status: 'new'},
    {image: 'assets/images/card/card2.jpg', icon: 'assets/images/icon/used.png', status: 'used'},
    {image: 'assets/images/card/card3.jpg', icon: 'assets/images/icon/unchecked.png', status: 'unchecked'},
    {image: 'assets/images/card/card4.jpg', icon: 'assets/images/icon/new.png', status: 'new'},
    {image: 'assets/images/card/card6.jpg', icon: 'assets/images/icon/unchecked.png', status: 'unchecked'},
    {image: 'assets/images/card/card7.jpg', icon: 'assets/images/icon/new.png', status: 'new'},
    {image: 'assets/images/card/card9.jpg', icon: 'assets/images/icon/unchecked.png', status: 'unchecked'}
  ];

  constructor() {}

}
