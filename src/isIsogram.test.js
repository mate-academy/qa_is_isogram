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
    ['Dermatoglyphics', true],
    ['Hello', false],
    ['Python', true],
  ])('should return %s for "%s"', (word, expected) => {
    expect(isIsogram(word)).toBe(expected);
  });
});
