{
  //
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
  console.log(getProperty(person, "name"));
  //
}
