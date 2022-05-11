import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Cast } from 'src/app/interfaces/credits-response';
import Swiper from 'swiper';

@Component({
  selector: 'app-cast-slide-show',
  templateUrl: './cast-slide-show.component.html',
  styleUrls: ['./cast-slide-show.component.css']
})
export class CastSlideShowComponent implements OnInit, AfterViewInit {


  @Input() cast: Cast[] | undefined;
  constructor() { }
  ngAfterViewInit(): void {
    const swiper = new Swiper('.swiper', {
      slidesPerView: 5.3,
      freeMode: true,
      spaceBetween: 15
    });
  }

  ngOnInit(): void {
  }

}
