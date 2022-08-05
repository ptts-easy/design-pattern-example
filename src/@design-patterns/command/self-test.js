console.log("***** running command self-test.js *****");

import Stock from "./stock.js";
import BuyStock from "./buy-stock.js";
import SellStock from "./sell-stock.js";
import Broker from "./broker.js";

import Run from "./command_1.js";

export default function self_test(){

  console.log("------- start command-test -------");

  let abcStock = new Stock();

  let buyStockOrder = new BuyStock(abcStock);
  let sellStockOrder = new SellStock(abcStock);

  let broker = new Broker();
  broker.takeOrder(buyStockOrder);
  broker.takeOrder(sellStockOrder);

  broker.placeOrders();

  console.log("------- end command-test -------");

  Run();
}