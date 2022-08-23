
class StudentController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }
  setStudentName(name) {
    this.model.setName(name);    
  }
  getStudentName() {
    return this.model.getName();   
  }
  setStudentRollNo(rollNo) {
    this.model.setRollNo(rollNo);    
  }
  getStudentRollNo() {
    return this.model.getRollNo();   
  }
  updateView() {        
   this.view.printStudentDetails(this.model.getName(), this.model.getRollNo());
  }
}

export default StudentController;