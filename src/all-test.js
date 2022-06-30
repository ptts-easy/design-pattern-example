console.log("running all_test.js");

import ClassInterface from "./@design-patterns/factory/class-interface.js";
import ClassAA from "./@design-patterns/factory/class-aa.js";
import ClassAB from "./@design-patterns/factory/class-ab.js";
import ClassBA from "./@design-patterns/factory/class-ba.js";
import ClassBB from "./@design-patterns/factory/class-bb.js";

let myClassI = new ClassInterface("myClassI");
myClassI.print_me();

let myClassAA = new ClassInterface("myClassAA");
myClassAA.print_me();

let myClassAB = new ClassInterface("myClassAB");
myClassAB.print_me();

let myClassBA = new ClassInterface("myClassBA");
myClassBA.print_me();

let myClassBB = new ClassInterface("myClassBB");
myClassBB.print_me();
