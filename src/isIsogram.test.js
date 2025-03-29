'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  test(`should return true if the word has no repeating letters`, () => {
    expect(isIsogram('Dmitro')).toEqual(true);
  });

  test(`should return true if there are no letters`, () => {
    expect(isIsogram('')).toEqual(true);
  });

  test(`should return false if the word has repeating letters`, () => {
    expect(isIsogram('Anna')).toEqual(false);
  });

  test(`should return false if the word has repeating letters`, () => {
    expect(isIsogram('Diana')).toEqual(false);
  });
});
