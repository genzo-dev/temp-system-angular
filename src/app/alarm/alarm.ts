import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alarm',
  standalone: true,
  imports: [],
  templateUrl: './alarm.html',
  styleUrl: './alarm.css',
})
export class Alarm {
  @Input() temperatura: number = 0;

  get status(): string {
    return this.temperatura > 80 ? 'PERIGO: Superaquecimento!' : 'Normal';
  }
}
