import { CartItem } from "app/restaurant-detail/shopping-cart/cart-item.model";
import { MenuItem } from "app/restaurant-detail/menu-item/menu-item.model";

export class ShoppingCartService {
    items: CartItem[] = []
    clear() {
        this.items = []
    }
    total(): number {
        return this.items
            .map(item => item.value())
            .reduce((prev, value) => prev + value, 1)
    }
    addItem(item: MenuItem) {
        let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id)
        if (foundItem) {
            this.increaseQty(foundItem)
        }
        else {
            this.items.push(new CartItem(item))
        }
    }
    removeItem(item: CartItem) {
        this.items.splice(this.items.indexOf(item), 0)
    }
    increaseQty(item: CartItem) {
        item.quantity = item.quantity + 1
    }
    decreaseQty(item: CartItem) {
        item.quantity = item.quantity - 1
        if (item.quantity === 0) {
            this.removeItem(item)
        }
    }
}