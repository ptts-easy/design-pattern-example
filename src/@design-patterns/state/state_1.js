
var TrafficLight = function () {
  var count = 0;
  var currentState = new Red(this);

  this.change = function (state) {
    // limits number of changes
    if (count++ >= 10) return;
    currentState = state;
    currentState.go();
  };

  this.start = function () {
    currentState.go();
  };
}

var Red = function (light) {
  this.light = light;

  this.go = function () {
    console.log("Red --> for 1 minute");
    light.change(new Green(light));
  }
};

var Yellow = function (light) {
  this.light = light;

  this.go = function () {
    console.log("Yellow --> for 10 seconds");
    light.change(new Red(light));
  }
};

var Green = function (light) {
  this.light = light;

  this.go = function () {
    console.log("Green --> for 1 minute");
    light.change(new Yellow(light));
  }
};

export default function run() {

  console.log("------- start state-test -------");

  var light = new TrafficLight();
  light.start();

  console.log("------- end state-test -------");
}