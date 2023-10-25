import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Iproduct } from './../../models/IProduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  amount: any = 0;
  addButton: boolean = false;
  @Input() data: any = {};
  @Output() item = new EventEmitter();
  constructor() {}

  add() {
    this.item.emit({ item: this.data, quantity: this.amount });
  }
}
