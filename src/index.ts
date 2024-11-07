{
  //
  //Problem 1
  type numberArrar = number[];
  function sumArray(param: numberArrar): number {
    let getSumNumber: number = 0;
    for (let index = 0; index < param.length; index++) {
      getSumNumber += param[index];
    }
    return getSumNumber;
  }
  // console.log(sumArray([1, 2, 3, 4, 5, 6]));

  // Problem 2
  function removeDuplicates(param: numberArrar): numberArrar {
    let sortArray: numberArrar = param.slice().sort((a, b) => a - b);
    let getSingle: numberArrar = [];

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
