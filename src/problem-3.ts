{
  //
  // problem 3
  type globalArray<T> = Array<T>;
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
  console.log(
    countWordOccurrences(
      "TypeScript is great. I love TypeScript!",
      "typescript"
    )
  );
  //
}
