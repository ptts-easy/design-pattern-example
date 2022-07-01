console.log("running singleton.js");

class Singleton {
  static instance;

  constructor(instancename) {
    if (Singleton.instance != undefined) {
      console.log("Error : can not create Singleton class with " + instancename);
    }
    this.instancename = instancename;
  }
  static getInstance(instancename){
    if (Singleton.instance == undefined) {
      Singleton.instance = new Singleton("private");

      console.log("Created Singleton Instance");
    }

    Singleton.instance.instancename = instancename;

    return Singleton.instance;
  }
  printMe() {
    console.log("Called " + this.instancename + " : Singleton");
  }
}

export default Singleton;