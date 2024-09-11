// Problem 6
const namesAndAges = (names, ages) => {
  return names.map((name, index) => {
    return {
      name: name,
      age: ages[index],
    };
  });
};

export default namesAndAges;
