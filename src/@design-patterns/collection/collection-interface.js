console.log("running collection-interface.js");

//import ElementInterface from "./element-interface.js";

class CollectionInterface{
  constructor() {
    this.elements = new Map();
  }
  getAllElements() {
    return this.elements;
  }
  setAllElements(elemetns) {
    this.elements = elements;
  }  
  updateElement(element) {
    this.elements.set(element.getUid(), element);
  }
  hasElement(uid) {
    return this.elements.has(uid);
  }
  getElement(uid) {
    return this.elements.get(uid);
  }
  deleteElement(element) {
    this.elements.delete(element.getUid());
  }
  printMe() {
    console.log("Called " + this.elements.size + " : CollectionInterface");

    this.elements.forEach ((value, key) => {
//      console.log("    item uid : " + key + " value : " + value.getUid());
      value.printMe();
    })    
  }
}

export default CollectionInterface;