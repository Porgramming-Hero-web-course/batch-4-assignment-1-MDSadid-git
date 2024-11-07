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

  //
}
