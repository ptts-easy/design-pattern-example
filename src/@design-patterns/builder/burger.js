import Item from "./item.js";
import Wrapper from "./wrapper.js";

class Burger extends Item {
  packing() {
    return new Wrapper();
  }
}

export default Burger;