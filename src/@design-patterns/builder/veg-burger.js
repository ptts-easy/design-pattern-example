import Burger from "./burger.js";
import Wrapper from "./wrapper.js";

class VegBurger extends Burger {
  price() {
    return 25.0;
  }
  name() {
    return "Veg Burger";
  }
}

export default VegBurger;