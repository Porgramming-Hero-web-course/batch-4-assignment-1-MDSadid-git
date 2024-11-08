{
  //
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

  console.log(validateKeys(person2, ["name", "age"]));
  //
}
