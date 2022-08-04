import ColdDrink from "./cold-drink.js";

class Pepsi extends ColdDrink {
  price() {
    return 35.0;
  }
  name() {
    return "Pepsi";
  }
}

export default Pepsi;