import { Component, ViewChild } from "@angular/core";
import { Slide } from "./carousel/carousel.interface";
import { AnimationType } from "./carousel/carousel.animations";
import { CarouselComponent } from "./carousel/carousel.component";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  @ViewChild(CarouselComponent, { static: true }) carousel: CarouselComponent;

  animationType = AnimationType.Scale;

  animationTypes = [
    {
      name: "Scale",
      value: AnimationType.Scale 
    },
    {
      name: "Fade",
      value: AnimationType.Fade
    },
    {
      name: "SlideInOut",
      value: AnimationType.SlideInOut
    },
        {
      name: "Flip",
      value: AnimationType.Flip
    }
  ];
  slides: Slide[] = [
    {
      headline: "1",
      src:
        "https://picsum.photos/id/238/1400/1600"
    },
    {
      headline: "2",
      src:
        "https://picsum.photos/id/236/1400/1600"
    },
    {
      headline: "3",
      src:
        "https://picsum.photos/id/231/1400/1600"
    }
  ];

  constructor() {}

  setAnimationType(type) {
    this.animationType = type.value;
    setTimeout(() => {
      this.carousel.onNextClick();
    });
  }
}
