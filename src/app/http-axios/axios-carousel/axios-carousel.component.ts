import { Component } from '@angular/core';

interface AxiosCard {
  component: string;
  // Otros campos necesarios para <app-fetch-card></app-fetch-card>
}

@Component({
  selector: 'app-axios-carousel',
  templateUrl: './axios-carousel.component.html',
  styleUrls: ['./axios-carousel.component.css'],
})
export class AxiosCarouselComponent {
  activeIndex: number = 0;

  animation: string = 'cardLeft';

  axiosCards: AxiosCard[] = [
    {
      component: 'hola1',
    },
    {
      component: 'hola2',
    },
    {
      component: 'hola3',
    },
  ];

  prevCard() {
    this.activeIndex =
      (this.activeIndex - 1 + this.axiosCards.length) % this.axiosCards.length;
    console.log(this.activeIndex);

    this.animationRight();
    console.log(this.animation);
  }

  nextCard() {
    this.activeIndex = (this.activeIndex + 1) % this.axiosCards.length;
    console.log(this.activeIndex);

    this.animationLeft();
    console.log(this.animation);
  }
  animationLeft() {
    this.animation = 'cardLeft';
  }
  animationRight() {
    this.animation = 'cardRight';
  }
}
