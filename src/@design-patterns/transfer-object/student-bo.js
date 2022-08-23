import StudentVO from "./student-vo.js";

class StudentBO {
  constructor() {
    this.students = new Map();
    let student1 = new StudentVO("Robert", 0);
    let student2 = new StudentVO("John", 1);
    this.students.set(student1.getRollNo(), student1);
    this.students.set(student2.getRollNo(), student2);
  }
  deleteStudent(student) {
    this.students.delete(student.getRollNo());
    console.log("Student: Roll No " + student.getRollNo() + ", deleted from database");
  }
  //retrive list of students from the database
  getAllStudents() {
    return this.students;
  }
  getStudent(rollNo) {
    return this.students.get(rollNo);
  }
  updateStudent(student) {
    this.students.get(student.getRollNo()).setName(student.getName());
    console.log("Student: Roll No " + student.getRollNo() +", updated in the database");
  }
}

export default StudentBO;