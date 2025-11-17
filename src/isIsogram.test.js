'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  test.each([
    ['playgrounds', true],
    ['look', false],
    ['Adam', false],
    ['', true],
    ['Oops', false],
    ['mM', false],
  ])('isIsogram(%s) should return %p', (word, expected) => {
    expect(isIsogram(word)).toEqual(expected);
  });
});
