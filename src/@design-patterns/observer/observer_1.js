
function Click() {
  this.handlers = [];  // observers
}

Click.prototype = {

  subscribe: function (fn) {
    this.handlers.push(fn);
  },

  unsubscribe: function (fn) {
    this.handlers = this.handlers.filter(
      function (item) {
        if (item !== fn) {
          return item;
        }
      }
    );
  },

  fire: function (o, thisObj) {
//    var scope = thisObj || window;
    var scope = thisObj;
    this.handlers.forEach(function (item) {
      item.call(scope, o);
    });
  }
}

export default function run() {

  console.log("------- start observer-test -------");

  var clickHandler = function (item) {
    console.log("fired: " + item);
  };

  var click = new Click();

  click.subscribe(clickHandler);
  click.fire('event #1');
  click.unsubscribe(clickHandler);
  click.fire('event #2');
  click.subscribe(clickHandler);
  click.fire('event #3');

  console.log("------- end observer-test -------");
}