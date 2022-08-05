import Order from "./order.js";

class BuyStock extends Order {
  constructor(abcStock) {
    super();
    this.abcStock = abcStock;
  }
  execute() {
    this.abcStock.buy()
  }
}

export default BuyStock;