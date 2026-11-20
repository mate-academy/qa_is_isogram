'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it.each([
    ['playgrounds', true],
    ['', true],
  ])('should retur %s -> %s for isogram', (word, expected) => {
    expect(isIsogram(word)).toBe(expected);
  });

  it.each([
    ['look', false],
    ['Adam', false],
    ['Oops', false],
  ])('should retur %s -> %s for non-isogram', (word, expected) => {
    expect(isIsogram(word)).toBe(expected);
  });
});
