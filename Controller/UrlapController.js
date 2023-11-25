import UrlapView from "../View/UrlapView.js";

class UrlapController {
  constructor() {
    console.log("controller");
    new UrlapView($(".urlap"));
  }
}

export default UrlapController;
