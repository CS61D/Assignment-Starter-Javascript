// Problem 7

const doubleAge = (obj) => {
  let parsedObj = JSON.parse(obj);
  if (parsedObj.age) {
    parsedObj.age *= 2;
    return parsedObj;
  } else {
    parsedObj["age"] = 0;
    return parsedObj;
  }
};

export default doubleAge;
