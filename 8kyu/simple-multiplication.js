//DESCRIPTION
//This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

//SOLUTION
function simpleMultiplication(number) {
  let result = number % 2 === 0 ? number * 8 : number * 9;
  return result;
}
