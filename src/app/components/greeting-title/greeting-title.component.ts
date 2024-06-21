import { Component } from '@angular/core';

@Component({
  selector: 'greeting-title',
  standalone: true,
  imports: [],
  templateUrl: './greeting-title.component.html',
  styleUrl: './greeting-title.component.scss'
})
export class GreetingTitleComponent {
  greeting = '';
  currentTime = new Date();
  currentHour = this.currentTime.getHours();
  constructor(){
 if (this.currentHour >= 5 && this.currentHour < 12) {
    this.greeting = "Good morning";
  } else if (this.currentHour >= 12 && this.currentHour < 18) {
    this.greeting = "Good afternoon";
  } else {
    this.greeting = "Good night";
  }
  }
}
