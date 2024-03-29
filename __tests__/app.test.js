
// const request = require('supertest');
// const app = require('../lib/app');
import getName, { fetchQuote } from '../lib/functions.js';
import { copyAndPush, capitalizeAndFilter } from '../lib/functions.js';

describe('RGB-Lab routes', () => {


  it('this is a test that will return the name in the object', () => {

    const spot = { name: 'spot', age: 5, weight: '20 lbs' };
    const actual = getName(spot); // returns spot
    expect(actual).toEqual('spot');


  });

  test('returns a new array all the items in the original array and a new item pushed to thew end', () => {
    const numbers = [1, 2, 3];
    const actual = copyAndPush(numbers, 4);
    expect(actual).toEqual([numbers, [1, 2, 3, 4]]);
  });

  test('takes an array of strings capitalize all strings and filter out any string that starts with the letter F/f.', () => {
    const stringArray = ['fox', 'dog', 'Falcon', 'cat', 'ferret'];
    expect(capitalizeAndFilter(stringArray)).toEqual(['DOG', 'CAT']);


  });

  test('return a random quote with specific format', async () => {
    const munged = {
      name: expect.any(String),
      text: expect.any(String),
      image: expect.any(String)
    };

    const actual = await fetchQuote();

    expect(actual).toEqual(munged);

  });

});

