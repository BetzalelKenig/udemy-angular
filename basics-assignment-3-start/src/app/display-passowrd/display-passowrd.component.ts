import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-passowrd',
  templateUrl: './display-passowrd.component.html',
  styles: [`
    .five{
      color: white
    }
  `]
})
export class DisplayPassowrdComponent implements OnInit {
  show = false;
  clicks = [];

  constructor() { }

  ngOnInit(): void {
  }

  display() {
    this.show = !this.show;
    const t = new Date();
    console.log(t);
    this.clicks.push(`clicked in:  ${t.toLocaleDateString()} ${t.toLocaleTimeString()}`);
  }
}
