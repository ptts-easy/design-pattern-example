import ColdDrink from "./cold-drink.js";

class Coke extends ColdDrink {
  price() {
    return 30.0;
  }
  name() {
    return "Coke";
  }
}

export default Coke;