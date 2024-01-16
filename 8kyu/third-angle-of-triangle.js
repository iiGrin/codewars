//DESCRIPTION
// You are given two interior angles (in degrees) of a triangle.
// Write a function to return the 3rd.
// Note: only positive integers will be tested.

//SOLUTION
function otherAngle(a, b) {
  let thirdAngle = 0;
  let totalDegrees = 180;
  thirdAngle = totalDegrees - a - b;
  return thirdAngle;
}
