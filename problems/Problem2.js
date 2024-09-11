// Problem 2
const largestMystery = (arr, mysteryFunc) => {
  let largest = Number.NEGATIVE_INFINITY;
  let found = false;
  for (let i = 0; i < arr.length; i++) {
    if (mysteryFunc(arr[i]) && arr[i] > largest) {
      largest = arr[i];
      found = true;
    }
  }
  if (found) {
    return largest;
  } else {
    return "No number passes the function!";
  }
};
export default largestMystery;
