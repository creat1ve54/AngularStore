import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Pagination } from "swiper";

SwiperCore.use([Pagination]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export default class AppComponent implements OnInit {
  ngOnInit(): void {

  }

}
