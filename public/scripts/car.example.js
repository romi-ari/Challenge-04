class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
      <img class = "card-img-top" src="./images/examplecar.png" alt="${this.manufacture}" width="64px">
        <div class="card-body">
        <p class="card-text">plate: <b>${this.plate}</b></p>
        <p class="card-text">capacity: <b>${this.capacity}<b><p>
        <p class="card-text">manufacture: <b>${this.manufacture}</b></p>
        <p class="card-text">model: <b>${this.model}</b></p>
        <p class="card-text">available at: <b>${this.availableAt}</b></p>
        </div>
    `;
  }
}
