'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`function should be declared`, () => {
    expect(isIsogram)
      .toBeInstanceOf(Function);
  });

  it('should return a boolean value', () => {
    expect(typeof isIsogram('playground'))
      .toBe('boolean');
  });

  it('should return true for an empty string', () => {
    expect(isIsogram(''))
      .toBe(true);
  });

  it('should return true for a string with only one letter', () => {
    expect(isIsogram('a'))
      .toBe(true);
  }); // technically one-letter string could be considered as an isogram

  it('should return true for a word without repeating letters', () => {
    expect(isIsogram('playground'))
      .toBe(true);
  });

  it('should return true for a word from different languages', () => {
    expect(isIsogram('привіт'))
      .toBe(true);
  });

  it('should return false for a word with repeating letters', () => {
    expect(isIsogram('look'))
      .toBe(false);
  });

  it('should be case-insensitive', () => {
    expect(isIsogram('Adam'))
      .toBe(false);
  });
});
