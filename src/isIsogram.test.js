'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for an empty sting', () => {
    expect(isIsogram('')).toBeTruthy();
  });

  it('should return true for word with unique letters', () => {
    expect(isIsogram('crxdetubzmjplknhysogaivqfw')).toBeTruthy();
  });

  it('should  return false for word with duplicate letters', () => {
    expect(isIsogram('robot')).toBeFalsy();
  });

  it(`should be case-insensitive: `
      + `(return false if the word has 'M' and 'm')`, () => {
    expect(isIsogram('Mumbai')).toBeFalsy();
  });
});
