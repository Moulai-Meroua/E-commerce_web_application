import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-ads',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ads.component.html',
  styleUrl: './ads.component.css'
})
export class AdsComponent {
  @Input() moves: any[] = [];
  @Input() autoPlay = true;
  currentMove = 0;
  good = false;
  

  next() {
    this.good = true;
    setTimeout(() => {
      this.currentMove = (this.currentMove - 1 + this.moves.length) % this.moves.length;
      this.good = false;
    }, 500);
  }

  previos() {
    this.good = true;
    setTimeout(() => {
      this.currentMove = (this.currentMove + 1) % this.moves.length;
      this.good = false;
    }, 500);
  }
  

  jump(index: number){
    this.good = true;
    setTimeout(() => {
      this.currentMove = index;
      this.good = false;
    }, 500);
  }


  constructor() {
    if (this.autoPlay) {
      setInterval(() => {
        this.next();
      }, 4000);
    }
  }
}
