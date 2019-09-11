export class CartItemModel {
    constructor(
        public id: string = "",
        public title: string = "",
        public image: string = "",
        public quantity: number = 0,
    ) {
    }
}