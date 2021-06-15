import fetch from 'node-fetch';

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

export function fetchQuote(n) {

  const random = Math.floor(Math.random() * 20);

  return fetch('https://futuramaapi.herokuapp.com/api/quotes').then(res => res.json()).then(data => ({
    name: data[random].character,
    text: data[random].quote,
    image: data[random].image
  }
  ));



}


