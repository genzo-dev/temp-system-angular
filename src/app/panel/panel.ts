import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [],
  templateUrl: './panel.html',
  styleUrl: './panel.css',
})
export class Panel {
  @Output() aumentar = new EventEmitter<void>();
  @Output() diminuir = new EventEmitter<void>();

  aquecer() {
    this.aumentar.emit();
  }

  esfriar() {
    this.diminuir.emit();
  }
}
