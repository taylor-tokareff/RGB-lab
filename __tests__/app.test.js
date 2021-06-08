
// const request = require('supertest');
// const app = require('../lib/app');
import getName from '../lib/functions.js';
import { copyAndPush } from '../lib/functions.js';

describe('RGB-Lab routes', () => {
  // beforeEach(() => {
  //   return setup(pool);
  // });

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

  test('')

});


