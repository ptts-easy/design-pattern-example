console.log("***** running transfer-object self-test.js *****");

import StudentBO from "./student-bo.js";

export default function self_test() {

  console.log("------- start transfer-object-test -------");

  let studentBusinessObject = new StudentBO();

  //print all students
  studentBusinessObject.getAllStudents().forEach (function(student, rollNo) {
    console.log("Student: [RollNo : " + student.getRollNo() + ", Name : " + student.getName() + " ]");
  })

  //update student
  let student = studentBusinessObject.getAllStudents().get(0);
  student.setName("Michael");
  studentBusinessObject.updateStudent(student);

  //get the student
  student = studentBusinessObject.getStudent(0);
  console.log("Student: [RollNo : " + student.getRollNo() + ", Name : " + student.getName() + " ]");

  console.log("------- end transfer-object-test -------");
}
