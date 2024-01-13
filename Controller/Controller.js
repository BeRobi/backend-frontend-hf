import DataService from "../Model/DataService.js";
import TablaView from "../View/Tablazat/TablaView.js";

class Controller {
  constructor() {
    this.dataService = new DataService();
    this.dataService.getAxiosData("http://localhost:8000/api/writers/", this.megjelenit);
    /* this.dataService.postAxiosData("writers", {
      nev: "Jenő",
      szul: 1979,
    });

    this.dataService.putAxiosData("writers", {
      id: 1,
      nev: "Átírt József Attila",
      szul: 1905,
    });

    this.dataService.deleteAxiosData("writers", 15); */
  }
  megjelenit(list) {
    console.log(list);
    new TablaView(list, $(".adatok"));
  }
    
}
export default Controller;
