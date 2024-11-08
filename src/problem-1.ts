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
  console.log(sumArray([1, 2, 3, 4, 5, 6]));
  //
}
