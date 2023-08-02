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
      name: "Flip",
      value: AnimationType.Flip
    }
  ];
  slides: Slide[] = [
    {
      headline: "1",
      src:
        "./src/app/images/bitter-free-number-font.png.webp"
    },
    {
      headline: "2",
      src:
        "./src/app/images/crimson-number-typeface.png.webp"
    },
    {
      headline: "3",
      src:
        "./src/app/images/lato-free-number-font.png.webp"
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
