{
  //
  // Problem 7
  class Car {
    constructor(
      public name: string,
      public work: string,
      public model: number
    ) {}
    getCarAge() {
      const currentYear = new Date().getFullYear();
      const age = currentYear - this.model;
      console.log(age, `assuming current year is ${currentYear}`);
      return age;
    }
  }

  const car = new Car("Honda", "Civic", 2018);
  car.getCarAge();
  //
}
