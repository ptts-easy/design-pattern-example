import Burger from "./burger.js";
import Wrapper from "./wrapper.js";

class ChickenBurger extends Burger {
  price() {
    return 50.5;
  }
  name() {
    return "Chicken Burger";
  }
}

export default ChickenBurger;