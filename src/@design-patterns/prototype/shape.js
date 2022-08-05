
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
  setId(id) {
    this.id = id;
  }
  clone() {
    // "Spread"
//    let clone = { ...this };

    // "Object.assign"
//    let clone = Object.assign({}, this);
    let clone = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    return clone;
  }
}

export default Shape;