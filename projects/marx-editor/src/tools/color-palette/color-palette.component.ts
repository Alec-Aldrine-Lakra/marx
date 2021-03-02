import { Component, Output, EventEmitter, Input } from '@angular/core';
import template from './color-palette.component.html';
@Component({
  selector: 'app-color-palette',
  template: template + ``,
  styleUrls: ['./color-palette.component.less'],
})
export class ColorPaletteComponent {
  @Input() color: string;
  @Output() colorChange: EventEmitter<string> = new EventEmitter();
  constructor() {  }

  change(event: string): void {
    this.colorChange.emit(event);
  }
}
