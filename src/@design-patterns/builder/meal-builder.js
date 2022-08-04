import VegBurger from "./veg-burger.js";
import Coke from "./coke.js";
import ChickenBurger from "./chicken-burger.js";
import Pepsi from "./pepsi.js";

import Meal from "./meal.js";

class MealBuilder {
  prepareVegMeal() {
    let meal = new Meal();
    meal.addItem(new VegBurger());
    meal.addItem(new Coke());
    return meal;
  }   
  prepareNonVegMeal() {
    let meal = new Meal();
    meal.addItem(new ChickenBurger());
    meal.addItem(new Pepsi());
    return meal;
  }
}

export default MealBuilder;