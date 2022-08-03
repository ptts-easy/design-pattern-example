console.log("running node-interface.js");

export const CHAIN_NEXT = 0;
export const CHAIN_FAILED = -1;
export const CHAIN_COMPLATE = 1;

class NodeInterface{
  constructor() {
    this.next = undefined;
  }
  getNext() {
    return this.next;
  }
  setNext(next) {
    this.next = next;
  }
  run() {
    return CHAIN_NEXT;
  }
  hasNext() {
    if (this.next != null && this.next != undefined) {
      return true;
    }
    return false;
  }
  setParam(param) {
    this.param = param;
  }
  execute() {
    var ret = this.run();
    
    if (ret != CHAIN_NEXT) {
      return ret;
    }
    if (this.hasNext() == true) {
      this.next.setParam(this.param);
      ret = this.next.execute();
    }

    return ret;
  }
}

export default NodeInterface;