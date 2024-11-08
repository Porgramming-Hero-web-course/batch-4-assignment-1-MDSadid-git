{
  //
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
  console.log(circleArea);
  console.log(rectangleArea);
  //
}
