class Meal {
  constructor() {
    this.items = [];
  }
  addItem(item) {
    this.items.push(item);
  }
  getCost() {
    let cost = 0.0;

    this.items.forEach((item) => {
      cost += item.price();
    });

    return cost;
  }
  showItems() {
    this.items.forEach((item) => {
      console.log("Item : " + item.name());
      console.log(", Packing : " + item.packing().pack());
      console.log(", Price : " + item.price());
    });
  }
}

export default Meal;