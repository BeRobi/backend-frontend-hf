import DataService from "../Model/DataService.js";

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
    new View(list, $(".adatok"));
  }
    
}
export default Controller;
