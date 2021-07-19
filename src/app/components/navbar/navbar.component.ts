import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  counter = 0;
  imgUrl = '../../assets/img/garfak_face.jpeg';

  constructor() {
  }

  ngOnInit(): void {
  }

  iconClicked(): void {
    this.counter++;

    if (this.counter % 6 === 0) {
      this.imgUrl = '../../assets/img/garfak_face.jpeg';
    } else if (this.counter % 3 === 0) {
      this.imgUrl = '../../assets/img/easter1.jpeg';
    }
  }

}
