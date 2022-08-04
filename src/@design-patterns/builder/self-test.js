console.log("***** running builder self-test.js *****");

import MealBuilder from "./meal-builder.js";

import Run from "./builder_1.js";

export default function self_test(){

  console.log("------- start chain-test -------");

  let mealBuilder = new MealBuilder();

  let vegMeal = mealBuilder.prepareVegMeal();
  console.log("Veg Meal");
  vegMeal.showItems();
  console.log("Total Cost: " + vegMeal.getCost());

  let nonVegMeal = mealBuilder.prepareNonVegMeal();
  console.log("\n\nNon-Veg Meal");
  nonVegMeal.showItems();
  console.log("Total Cost: " + nonVegMeal.getCost());

  console.log("------- end chain-test -------");

  Run();
}
