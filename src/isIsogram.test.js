'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return true if the word is an empty string`, () => {
    const result = isIsogram('');

    expect(result).toBe(true);
  });

  it(`should return true if all letters are different`, () => {
    const result = isIsogram('uncopyrightables');

    expect(result).toBe(true);
  });

  it(`should return true if all letters are different`, () => {
    const result = isIsogram('playgrounds');

    expect(result).toBe(true);
  });

  it(`should return false if the same letter occurs twice or more`, () => {
    const result = isIsogram('calculate');

    expect(result).toBe(false);
  });

  it(`should return false if the same letter occurs in different cases`, () => {
    const result = isIsogram('Europe');

    expect(result).toBe(false);
  });
});
