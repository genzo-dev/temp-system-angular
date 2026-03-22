import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Panel } from './panel/panel';
import { Alarm } from './alarm/alarm';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Panel, Alarm],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('temp-system');

  temp = signal(30);

  warmUp() {
    this.temp.update((t) => t + 10);
  }

  coldUp() {
    this.temp.update((t) => t - 10);
  }
}
