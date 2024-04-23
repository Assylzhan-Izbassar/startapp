import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css',
})
export class TimerComponent implements OnInit {
  remainingTime: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
  private millisecondsInDay = 24 * 60 * 60 * 1000;
  startDate = new Date(2024, 3, 23, 10, 37, 31);
  endDate = new Date(this.startDate.getTime() + 14 * this.millisecondsInDay);

  constructor(private cdr: ChangeDetectorRef) {
    this.remainingTime = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  ngOnInit(): void {
    this.calculateRemainingTime();
    setInterval(() => {
      this.calculateRemainingTime();
    }, 1000);
  }

  calculateRemainingTime() {
    const currTime = new Date();
    const remainingMilliseconds = this.endDate.getTime() - currTime.getTime();

    this.remainingTime = {
      days: Math.floor(remainingMilliseconds / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (remainingMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes: Math.floor(
        (remainingMilliseconds % (1000 * 60 * 60)) / (1000 * 60)
      ),
      seconds: Math.floor((remainingMilliseconds % (1000 * 60)) / 1000),
    };
    this.cdr.detectChanges();
  }
}
