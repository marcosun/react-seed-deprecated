/*
  * This demo tests a function in src/BasicJestDemo/index
*/

import sum from '../../src/BasicJestDemo/index';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});