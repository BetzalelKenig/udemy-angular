import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() emitnumbers = new EventEmitter<number>();
  gnumbers;
  lastNumber = 0;
  isInterval = false;

  constructor() { }

  ngOnInit(): void {
  }

  startGame() {
    if (!this.isInterval) {
      this.isInterval = true;
      this.gnumbers = setInterval(() => {
        this.emitnumbers.emit(this.lastNumber + 1);
        this.lastNumber++;
      }, 1000);
    }
  }

  endGame() {
    clearInterval(this.gnumbers);
    this.isInterval = false;
  }
}
