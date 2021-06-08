export default ({ name }) => {
  // const { name } = object;
  return name;

};

export function copyAndPush(array, n) {
  const newArray = [...array];
  newArray.push(n);
  return [array, newArray];
}

export function capitalizeAndFilter(array) {
  const newArray = [];
  for (const element of array) {
    const upperCase = element.toUpperCase();
    if (upperCase.charAt(0) !== 'F')
      newArray.push(upperCase);
  }
  return newArray;
}
