import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent {
  @Input() title: string = '';
  @Input() items: any[] = [];
  @Output() selectedValue = new EventEmitter();
  constructor() {}

  getByCategory(event: any) {
    this.selectedValue.emit(event);
  }
}
