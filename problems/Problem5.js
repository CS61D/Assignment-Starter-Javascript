// Problem 5
const uppercaseStringsContainingWaldo = (arr) => {
  let result = arr.filter((element) => element.includes("waldo"));
  return result.map((element) => element.toUpperCase());
};

export default uppercaseStringsContainingWaldo;
