import UrlapView from "../View/UrlapView.js";

class UrlapController {
  constructor() {
    //console.log("controller");
    new UrlapView($(".urlap"));

    $(window).on("ujAdatHozzaAdasa", (event)=>{
        console.log("Az űrlap adatait megkapja a kontroller")
        console.log(event.detail)
        //adatbázisba beilleszteni a kapott adatot
        //dataService.postAxios(apiVegpont, event.detail)
    })
  }
}

export default UrlapController;
