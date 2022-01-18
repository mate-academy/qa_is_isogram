'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return true if string are empty`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`should return true if letters are not repeated`, () => {
    expect(isIsogram('bohdan')).toBe(true);
  });

  it(`should return false if letters are repeated`, () => {
    expect(isIsogram('mcdonalds')).toBe(false);
  });

  it(`should return false for repeated letters not depended of case`, () => {
    expect(isIsogram('McDonalds')).toBe(false);
  });
});
