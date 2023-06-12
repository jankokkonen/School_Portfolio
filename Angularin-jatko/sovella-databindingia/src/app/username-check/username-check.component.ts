import { Component } from '@angular/core';

@Component({
  selector: 'app-username-check',
  templateUrl: './username-check.component.html',
  styleUrls: ['./username-check.component.css']
})
export class UsernameCheckComponent {
    userName = '';

    clearInput(){
    this.userName = '';
  }
}
