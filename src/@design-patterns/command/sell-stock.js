import Order from "./order.js";

class SellStock extends Order {
  constructor(abcStock) {
    super();
    this.abcStock = abcStock;
  }
  execute() {
    this.abcStock.sell()
  }
}

export default SellStock;