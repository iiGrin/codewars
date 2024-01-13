//DESCRIPTION
// Build a function that returns an array of integers from n to 1 where n>0.
// Example : n=5 --> [5,4,3,2,1]

//SOLUTION
const reverseSeq = (n) => {
  let resArr = [];
  resArr.push(n);
  for (let i = 1; i < n; i++) {
    resArr.push(i);
    resArr.sort((a, b) => b - a);
  }
  return resArr;
};
