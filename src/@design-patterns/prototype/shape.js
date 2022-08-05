
class Shape {
  constructor() {
    this.id = "";
    this.type = "";
  }  
  draw() {
  }
  getType() {
    return this.type;
  }
  getId() {
    return this.id;
  }
  setId(String id) {
    this.id = id;
  }
  clone() {
    // "Spread"
//    let clone = { ...this };

    // "Object.assign"
    let clone = Object.assign({}, this);
    return clone;
  }
}

export default Shape;