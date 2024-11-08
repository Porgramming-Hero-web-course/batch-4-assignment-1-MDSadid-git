{
  //
  // Problem 2
  type globalArray<T> = Array<T>;
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
  console.log(removeDuplicates([1, 6, 2, 2, 3, 3, 4, 4, 4, 5, 4, 4, 1, 1]));
  //
}
