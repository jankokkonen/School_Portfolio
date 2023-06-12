import { Component } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent {
  btnClicked = true;
  myArray: number[] = [];

  onBtnClicked() {
    this.myArray.push(this.myArray.length + 1);
    this.btnClicked = !this.btnClicked;
    console.log(this.myArray);
  }
}


