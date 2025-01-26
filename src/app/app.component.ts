import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  sub!: Subscription;
  title = 'publish-app';
  time = Date.now().toString();

  ngOnInit(): void {
    this.sub = interval(1000).subscribe((d: number) => {
      this.time = Date.now().toString();
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
