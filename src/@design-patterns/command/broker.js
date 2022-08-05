
class Broker {
  constructor() {
    this.orderList = [];
  }
  takeOrder(order) {
    this.orderList.push(order);
  }
  placeOrders() {
    for (let order of this.orderList) {
      order.execute();
    }
    
//    this.orderList.forEach((order) => {
//      order.execute();
//    });
    this.orderList = [];
  }
}

export default Broker;