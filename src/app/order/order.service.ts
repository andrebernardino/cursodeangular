import { Injectable } from "@angular/core";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { CartItem } from "app/restaurant-detail/shopping-cart/cart-item.model";
import { Order, OrderItem } from "app/order/order.model";
import { Observable } from "rxjs/Observable";
import { Http, Headers, RequestOptions } from "@angular/http";
  

@Injectable()
export class OrderService {
    constructor(private cartService: ShoppingCartService, private http: Http) { }
    cartItems(): CartItem[] {
        return this.cartService.items
    }

    increaseQty(item: CartItem) {
        this.cartService.increaseQty(item)
    }
    decreaseQty(item: CartItem) {
        this.cartService.decreaseQty(item)
    }
    remove(item: CartItem) {
        this.cartService.removeItem(item)
    }
    itemsValue(): number {
        return this.cartService.total()
    }
    checkOrder(order:Order): Observable<string>{
        const h
return this.http.post(`${MEAT_API}/orders`, JSON.stringify(order))
    }

}