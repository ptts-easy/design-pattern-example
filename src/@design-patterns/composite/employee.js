
class Employee {
  constructor(name, dept, sal) {
    this.name = name;
    this.dept = dept
    this.salary = sal;
    this.subordinates = [];
  }
  add(e) {
    this.subordinates.push(e);
  }
  remove(e) {
    let i = this.subordinates.indexOf(e);
    if (i > -1) {
      this.subordinates.splice(i, 1);
    }
  }
  getSubordinates() {
    return this.subordinates;
  }
  toString() {
    return ("Employee :[ Name : " + this.name + ", dept : " + this.dept + ", salary :" + this.salary+" ]");
  }
}

export default Employee;