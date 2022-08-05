console.log("***** running composite self-test.js *****");

import Employee from "./employee.js";

import Run from "./composite_1.js";

export default function self_test(){

  console.log("------- start composite-test -------");

  let CEO = new Employee("John","CEO", 30000);

  let headSales = new Employee("Robert","Head Sales", 20000);

  let headMarketing = new Employee("Michel","Head Marketing", 20000);

  let clerk1 = new Employee("Laura","Marketing", 10000);
  let clerk2 = new Employee("Bob","Marketing", 10000);

  let salesExecutive1 = new Employee("Richard","Sales", 10000);
  let salesExecutive2 = new Employee("Rob","Sales", 10000);

  CEO.add(headSales);
  CEO.add(headMarketing);

  headSales.add(salesExecutive1);
  headSales.add(salesExecutive2);

  headMarketing.add(clerk1);
  headMarketing.add(clerk2);

  //print all employees of the organization
  console.log(CEO.toString()); 

  CEO.getSubordinates().forEach((headEmployee) => {
    console.log(headEmployee.toString());

    headEmployee.getSubordinates().forEach((employee) => {
      console.log(employee.toString());
    });
  });

  console.log("------- end composite-test -------");

  Run();
}
