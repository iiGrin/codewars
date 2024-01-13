//DESCRIPTION
// Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.

//SOLUTION
function findAverage(array) {
  let resArr = 0;
  if (array == []) {
    return 0;
  } else {
    array.forEach(function (item) {
      resArr += item;
    });
    return resArr / array.length;
  }
}
