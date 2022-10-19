import { Component, OnInit, Input } from '@angular/core';
import { IRating } from '../voicemail/_models/voicemail.model';

export enum RATINGS {
  "easeOfUse" = "Ease of Use",
  "satisfaction" = "Satisfaction",
  "usefulness" = "Usefulness",
  "preference" = "Preference"
}

@Component({
  selector: 'app-display-rating',
  templateUrl: './display-rating.component.html',
  styleUrls: ['./display-rating.component.scss']
})
export class DisplayRatingComponent implements OnInit {
  @Input() ratings: IRating = {};

  constructor() { }

  ngOnInit(): void {
  }

  getRatingTypes() {
    return Object.keys(RATINGS);
  }

  getRatingValue(rating: string) {
    return (<any>this.ratings)[rating];
  }

  getRatingName(rating: string) {
    return (<any>RATINGS)[rating];
  }

  getClass(rating: string) {
    const _rating = (<any>this.ratings)[rating];
    if (_rating === 5) {
      return "green";
    } else if (_rating >= 3) {
      return "yellow";
    } else if (_rating >= 1) {
      return "orange";
    } else if (_rating < 1) {
      return "red";
    }
    return "";
  }

}
