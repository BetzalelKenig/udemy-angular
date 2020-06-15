import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddArr: number[] = [];
  evenArr: number[] = [];
  onInterval(gnumber: number) {
    if (gnumber % 2 === 0) {
      this.evenArr.push(gnumber);
    } else {
      this.oddArr.push(gnumber);
    }
  }
}
