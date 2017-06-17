function Cart(item,qty,price) {
    this.item=item;
    this.qty=qty;
    this.price=price;

    this.getInfo=function () {
        return item+";"+qty+";"+price;
    };

    this.addOne=function () {
        qty=qty+1;
    };
};

module.exports=Cart;

