import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrl: './action.component.css',
})
export class ActionComponent {
  days: number = 0;

  getDays(days: number) {
    this.days = days;
  }
}
