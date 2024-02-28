import DataService from "../Model/DataService.js";
import UrlapView from "../View/UrlapView.js";


class UrlapController {
  constructor() {
    //console.log("controller");
    new UrlapView($(".urlap"));
    const dataService = new DataService()

    $(window).on("ujAdatHozzaAdasa", (event)=>{
        console.log("Az űrlap adatait megkapja a kontroller")
        console.log(event.detail)

        //adatbázisba beilleszteni a kapott adatot
        dataService.postAxiosData("/register", event.detail)
    })
  }
}

export default UrlapController;
