
class Broker {
  constructor() {
    this.orderList = [];
  }
  takeOrder(order) {
    this.orderList.push(order);
  }
  placeOrders() {
    this.orderList.forEach((order) => {
      order.execute();
    });
    this.orderList = [];
  }
}

export default Broker;