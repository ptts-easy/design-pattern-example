console.log("running collection-name.js");

import ElementName from "./element-name.js";

import CollectionInterface from "./collection-interface.js";

class CollectionName extends CollectionInterface {
  printMe() {
    console.log("Called " + this.elements.size + " : CollectionName");

    this.elements.forEach ((value, key) => {
//      console.log("    item uid : " + key + " value : " + value.getName());
      value.printMe();
    })
  }  
}

export default CollectionName;