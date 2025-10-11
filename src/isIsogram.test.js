'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });
  
  it(`should return string"`, () => {
    expect(typeof isIsogram('word')).toBe('boolean');
  });

  it(`should return true for "isogram"`, () => {
    expect(isIsogram('isogram')).toBe(true);
  });

  it(`should return false for "eleven"`, () => {
    expect(isIsogram('eleven')).toBe(false);
  }); 

  it(`should return true for empty string`, () => {
    expect(isIsogram('')).toBe(true);
  });
});
