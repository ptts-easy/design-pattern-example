
class Stock {
  constructor() {
    this.name = "ABC";
    this.quantity = 10;
  }
  buy() {
    console.log("Stock [ Name: " + this.name + ", Quantity: " + this.quantity + " ] bought");
  }
  sell() {
    console.log("Stock [ Name: " + this.name + ", Quantity: " + this.quantity + " ] sold");
  }
}

export default Stock;