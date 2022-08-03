console.log("running chain-interface.js");

class ChainInterface{
  constructor() {
    this.first = undefined;
  }
  push(node) {
    if(this.first == undefined) {
      this.first = node;
    } else {
      let itr = this.first;
      while(itr.hasNext()) {
        itr = itr.getNext();
      }
      itr.setNext(node);
    }
  }
  execute() {
    if(this.first == undefined) {
      return false;
    } else {
      return this.first.execute();
    }
  }  
}

export default ChainInterface;