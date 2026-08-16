'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for an empty string', () => {
    expect(isIsogram('')).toBeTruthy();
  });

  it('should return true for a single character string', () => {
    expect(isIsogram('a')).toBeTruthy();
  });

  it('should return false for a string with all identical letters', () => {
    expect(isIsogram('aaa')).toBeFalsy();
  });

  it('should return true for a word with all unique letters', () => {
    expect(isIsogram('isogram')).toBeTruthy();
  });

  it('should return false for consecutive repeating letters', () => {
    expect(isIsogram('look')).toBeFalsy();
  });

  it('should return false for non-consecutive repeating letters', () => {
    expect(isIsogram('Adam')).toBeFalsy();
  });

  it('should be case-insensitive when comparing letters', () => {
    expect(isIsogram('IsOgram')).toBeTruthy();
  });
});
