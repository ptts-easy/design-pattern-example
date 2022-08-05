
var Shipping = function () {
  this.company = "";
};

Shipping.prototype = {
  setStrategy: function (company) {
    this.company = company;
  },

  calculate: function (package1) {
    return this.company.calculate(package1);
  }
};

var UPS = function () {
  this.calculate = function (package1) {
    // calculations...
    return "$45.95";
  }
};

var USPS = function () {
  this.calculate = function (package1) {
    // calculations...
    return "$39.40";
  }
};

var Fedex = function () {
  this.calculate = function (package1) {
    // calculations...
    return "$43.20";
  }
};

export default function run() {

  console.log("------- start strategy-test -------");

  var package1 = { from: "76712", to: "10012", weigth: "lkg" };

  // the 3 strategies

  var ups = new UPS();
  var usps = new USPS();
  var fedex = new Fedex();

  var shipping = new Shipping();

  shipping.setStrategy(ups);
  console.log("UPS Strategy: " + shipping.calculate(package1));
  shipping.setStrategy(usps);
  console.log("USPS Strategy: " + shipping.calculate(package1));
  shipping.setStrategy(fedex);
  console.log("Fedex Strategy: " + shipping.calculate(package1));

  console.log("------- end strategy-test -------");
}