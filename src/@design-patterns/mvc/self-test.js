console.log("***** running mvc self-test.js *****");

import Student from "./student.js";
import StudentView from "./student-view.js";
import StudentController from "./student-controller.js";

function retriveStudentFromDatabase() {
  let student = new Student();
  student.setName("Robert");
  student.setRollNo("10");
  return student;
}

export default function self_test() {

  console.log("------- start mvc-test -------");
  
  //fetch student record based on his roll no from the database
  let model  = retriveStudentFromDatabase();

  //Create a view : to write student details on console
  let view = new StudentView();

  let controller = new StudentController(model, view);

  controller.updateView();

  //update model data
  controller.setStudentName("John");

  controller.updateView();

  console.log("------- end mvc-test -------");
}