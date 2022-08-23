
class Cache_1 {
  constructor() {
    this.services = [];
  }
  getService(serviceName) {
    for (let service of this.services) {
      if (service.getName() == serviceName) {
        console.log("Returning cached  " + serviceName + " object");
        return service;
      }
    }
    return null;
  }
  addService(newService) {
    let exists = false;

    for (let service of this.services) {
      if (service.getName() == newService.getName()) {
        exists = true;
      }
    }
    if (exists == false) {
      this.services.push(newService);
    }
  } 
}

export default Cache_1;