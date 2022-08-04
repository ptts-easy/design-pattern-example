import Item from "./item.js";
import Bottle from "./bottle.js";

class ColdDrink extends Item {
  packing() {
    return new Bottle();
  }
}

export default ColdDrink;