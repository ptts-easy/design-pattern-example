console.log("***** running memento self-test.js *****");

import Originator from "./originator.js";
import CareTaker from "./care-taker.js";

import Run from "./memento_1.js";

export default function self_test(){

  console.log("------- start memento-test -------");

  let originator = new Originator();
  let careTaker = new CareTaker();

  originator.setState("State #1");
  originator.setState("State #2");
  careTaker.add(originator.saveStateToMemento());

  originator.setState("State #3");
  careTaker.add(originator.saveStateToMemento());

  originator.setState("State #4");
  console.log("Current State: " + originator.getState());    

  originator.getStateFromMemento(careTaker.get(0));
  console.log("First saved State: " + originator.getState());
  originator.getStateFromMemento(careTaker.get(1));
  console.log("Second saved State: " + originator.getState());

  console.log("------- end memento-test -------");

  Run();
}