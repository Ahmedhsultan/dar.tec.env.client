import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {
  @Input() rating: number = 0;
  @Output() ratingChange: EventEmitter<number> = new EventEmitter<number>();
  @Input() readonly: boolean = false;

  stars: string[] = [];

  ngOnInit() {
    this.fillStars();
  }

  ngOnChanges() {
    this.fillStars();
  }

  fillStars() {
    this.stars = [];
    const filledStars = Math.floor(this.rating);
    for (let i = 0; i < filledStars; i++) {
      this.stars.push('star');
    }
    const remainingStars = 5 - filledStars;
    for (let i = 0; i < remainingStars; i++) {
      this.stars.push('star_border');
    }
  }

  onStarClicked(index: number) {
    if(!this.readonly){
      this.rating = index;
      this.ratingChange.emit(this.rating);
    }
  }

  onStarHover(index: number) {
    if(!this.readonly){
    this.fillStars();
    for (let i = 0; i < index; i++) {
      this.stars[i] = 'star';
    }
  }
  }

  onMouseLeave() {
    if(!this.readonly){
    this.fillStars();
    }
  }
}
