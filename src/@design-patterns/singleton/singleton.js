console.log("running singleton.js");

class Singleton {
  constructor(instancename) {
    this.instancename = instancename;
  }
  print_me() {
    console.log("Called " + this.instancename + " : Singleton");
  }

  static instance;

  static getInstance(instancename){
    if(this.instance == undefined) {
      this.instance = new Singleton("");

      console.log("Created Singleton Instance");      
    }

    this.instance.instancename = instancename;

    return this.instance;
  }
}

export default Singleton;