
var User = function (name) {
  this.name = name;

  this.say = function () {
    console.log("User: " + this.name);
  };
}

var DecoratedUser = function (user, street, city) {
  this.user = user;
  this.name = user.name;  // ensures interface stays the same
  this.street = street;
  this.city = city;

  this.say = function () {
    console.log("Decorated User: " + this.name + ", " +
      this.street + ", " + this.city);
  };
}

export default function run() {

  console.log("------- start decorator-test -------");

  var user = new User("Kelly");
  user.say();

  var decorated = new DecoratedUser(user, "Broadway", "New York");
  decorated.say();

  console.log("------- end decorator-test -------");
}