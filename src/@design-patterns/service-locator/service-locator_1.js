import InitialContext_1 from "./initial-context_1.js";
import Cache_1 from "./cache_1.js";

class ServiceLocator_1 {
  static cache = new Cache_1;

  static getService(jndiName) {
    let service = ServiceLocator_1.cache.getService(jndiName);

    if (service != null) {
      return service;
    }

    let context = new InitialContext_1();
    let service1 = context.lookup(jndiName);
    ServiceLocator_1.cache.addService(service1);
    return service1;
  }
}

export default ServiceLocator_1;