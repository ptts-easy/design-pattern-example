import StudentView from "./student-view.js";
import HomeView from "./home-view.js";

class Dispatcher {
  constructor() {
    this.studentView = new StudentView();
    this.homeView = new HomeView;
  }
  dispatch(requet) {
    if (requet == "STUDENT") {
      this.studentView.show();
    } else {
      this.homeView.show();
    }
  }
}

export default Dispatcher;