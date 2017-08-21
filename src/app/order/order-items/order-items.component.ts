import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CartItem } from "app/restaurant-detail/shopping-cart/cart-item.model";

@Component({
  selector: 'mt-order-items',
  templateUrl: './order-items.component.html'
})
export class OrderItemsComponent implements OnInit {

  @Input() items: CartItem[]
  
  @Output() increaseQtd = new EventEmitter<CartItem>()
  @Output() decreaseQtd = new EventEmitter<CartItem>()
  @Output() remove = new EventEmitter<CartItem>()

  constructor() { }

  ngOnInit() {
  }

  emitIncreaseQty(item: CartItem) {
    this.increaseQtd.emit(item)
  }

  emitDecreaseQty(item: CartItem) {
    this.decreaseQtd.emit(item)
  }

  emitRemove(item: CartItem) {
    this.remove.emit(item)
  }
}
