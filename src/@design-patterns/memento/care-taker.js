class CareTaker {
  constructor() {
    this.mementoList = [];
  }
  add(state){
    this.mementoList.push(state);
  }
  get(index){
    return this.mementoList[index];
  }
}

export default CareTaker;