
class StudentVO {
  constructor(name, rollNo) {
    this.name = name;
    this.rollNo = rollNo;
  }
  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }
  getRollNo() {
    return this.rollNo;
  }
  setRollNo(rollNo) {
    this.rollNo = rollNo;
  }
}

export default StudentVO;