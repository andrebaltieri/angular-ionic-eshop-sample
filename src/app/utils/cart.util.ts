import { CartItemModel } from '../models/cart-item.model';

export class CartUtil {
    static get(): CartItemModel[] {
        const data = localStorage.getItem('eshop.cart');
        if (data) return JSON.parse(data);
        return [];
    }

    static set(cart: CartItemModel[]) {
        const data = JSON.stringify(cart);
        localStorage.setItem('eshop.cart', data);
    }

    static add(item: CartItemModel) {
        let cart = this.get();
        cart.push(item);
        this.set(cart);
    }

    static remove(item: CartItemModel) {
        let cart = this.get();
        const index = cart.indexOf(item);
        cart.splice(index, 1);
        this.set(cart);
    }

    static isInCart(item: CartItemModel): boolean {
        let cart = this.get();
        let hasItem = false;
        cart.forEach(element => {
            if (element.id.toString() == item.id.toString())
                hasItem = true;
        });
        return hasItem;
    }
}