
class SingleObject {

  //create an object of SingleObject
  static instance = new SingleObject();

  //make the constructor private so that this class cannot be
  //instantiated
  constructor() {
    console.log("Error : can not create SingleObject with new operator");
  }

  //Get the only object available
  static getInstance() {
    return SingleObject.instance;
  }

  showMessage() {
    console.log("Hello World!");
  }
}

export default SingleObject;