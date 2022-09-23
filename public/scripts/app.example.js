class App {
  constructor() {
    this.clearButton = document.getElementById("clear-btn");
    this.loadButton = document.getElementById("load-btn");
    this.carContainerElement = document.getElementById("cars-container");
    this.filterSopir = document.getElementById("sopir")
    this.filterTgl = document.getElementById("tgl")
    this.filterWaktu = document.getElementById("wkt")
    this.filterJmlPenumpang = document.getElementById("jmlPenumpang")
  }

  async init() {
    await this.load();
    // Register click listener
    this.clearButton.onclick = this.clear;
    this.loadButton.onclick = this.run;
  }

  run = () => {
    this.clear();
    Car.list.forEach((car) => {
      let dateTime = this.filterTgl.value + "T" + this.filterWaktu.value;
      let formdate = Date.parse(dateTime);
      let waktu = Date.parse(car.availableAt);
      let penumpang = this.filterJmlPenumpang.value;
      let driver = this.filterSopir.value;

      if (driver == "true"){
        driver = true;
      }else{
        driver = false;
      }

      if(car.available == driver && waktu >= formdate && car.capacity >= penumpang){
        const node = document.createElement("div");
        node.className = "col-lg-4 card card-container shadow bg-white"
        node.innerHTML = car.render();
        this.carContainerElement.appendChild(node);
      }
    });
  };

  async load() {
    const cars = await Binar.listCars();
    Car.init(cars);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };


}
