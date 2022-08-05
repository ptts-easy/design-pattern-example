console.log("***** running flyweight self-test.js *****");

import ShapeFactory from "./shape-factory.js";

import Run from "./flyweight_1.js";

let colors = ["Red", "Green", "Blue", "White", "Black"];

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function getRandomX() {
  return Math.floor(Math.random() * 100);
}

function getRandomY() {
  return Math.floor(Math.random() * 100);
}

export default function self_test(){

  console.log("------- start flyweight-test -------");

  for(let i = 0; i < 20; ++i) {
    let circle = ShapeFactory.getCircle(getRandomColor());
    circle.setX(getRandomX());
    circle.setY(getRandomY());
    circle.setRadius(100);
    circle.draw();
  }

  console.log("------- end flyweight-test -------");

  Run();
}