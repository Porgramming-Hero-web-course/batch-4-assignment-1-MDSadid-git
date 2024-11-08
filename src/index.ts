{
  //
  //Problem 1
  type globalArray<T> = Array<T>;
  function sumArray(param: globalArray<number>): number {
    let getSumNumber: number = 0;
    for (let index = 0; index < param.length; index++) {
      getSumNumber += param[index];
    }
    return getSumNumber;
  }
  // console.log(sumArray([1, 2, 3, 4, 5, 6]));

  // Problem 2
  function removeDuplicates(param: globalArray<number>): globalArray<number> {
    let sortArray: globalArray<number> = param.slice().sort((a, b) => a - b);
    let getSingle: globalArray<number> = [];

    for (let index = 0; index < sortArray.length; index++) {
      if (!(sortArray[index] === sortArray[index - 1])) {
        getSingle.push(sortArray[index]);
      }
    }
    return getSingle;
  }
  // console.log(removeDuplicates([1, 6, 2, 2, 3, 3, 4, 4, 4, 5, 4, 4, 1, 1]));

  // problem 3
  function countWordOccurrences(param1: string, param2: string): number {
    const stringArray: globalArray<string> = param1
      .toLowerCase()
      .replace("!", "")
      .split(" ");
    let count: number = 0;
    for (let index = 0; index < stringArray.length; index++) {
      if (stringArray[index] === param2.toLowerCase()) {
        count++;
      }
    }
    return count;
  }
  // console.log(
  //   countWordOccurrences(
  //     "TypeScript is great. I love TypeScript!",
  //     "typescript"
  //   )
  // );

  // Problem 4
  type Circle = {
    shape: "circle";
    radius: number;
  };
  type RectangleArea = {
    shape: "rectangle";
    width: number;
    height: number;
  };
  type ShapeArea = Circle | RectangleArea;
  function calculateShapeArea(shape: ShapeArea): number {
    if (shape.shape === "circle") {
      return parseFloat((Math.PI * Math.pow(shape.radius, 2)).toFixed(2));
    } else if (shape.shape === "rectangle") {
      return shape.width * shape.height;
    }
    return 0;
  }
  const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
  const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });
  // console.log(circleArea);
  // console.log(rectangleArea);

  // problem 5
  type Person = {
    name: string;
    age: number;
  };
  // function getProperty(param1: Person, param2: keyof Person): string | number {
  //   const OwenVelue = param2;
  //   return param1[OwenVelue];
  // }
  function getProperty<T, K extends keyof T>(myObj: T, key: K): T[K] {
    return myObj[key];
  }
  const person: Person = { name: "Alice", age: 30 };
  // console.log(getProperty(person, "name"));

  // Problem 6
  interface Profile {
    name: string;
    age: number;
    email: string;
  }
  const myProfile: Profile = {
    name: "Alice",
    age: 25,
    email: "alice@example.com",
  };
  function updateProfile(
    myObj: Profile,
    updatesObj: Partial<Profile>
  ): Profile {
    return { ...myObj, ...updatesObj };
  }
  // console.log(updateProfile(myProfile, { age: 26 }));

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
  // car.getCarAge();

  // Problem 8
  interface Profile2 {
    name: string;
    age: number;
    email: string;
  }

  const person2: Profile2 = {
    name: "Alice",
    age: 25,
    email: "alice@example.com",
  };

  function validateKeys<T extends object>(
    myObj: T,
    keyArray: (keyof T)[]
  ): boolean {
    return keyArray.every((key) => key in myObj);
  }

  // console.log(validateKeys(person2, ["name", "age"]));

  //
}
