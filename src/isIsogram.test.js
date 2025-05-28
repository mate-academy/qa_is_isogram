'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it('should be declared as a function', () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should return true for a lowercase isogram "playgrounds"', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it('should return false for a word with repeating letters "look"', () => {
    expect(isIsogram('look')).toBe(false);
  });

  it(
    'should return false for a word with repeating letters in different case '
    + '"Adam"',
    () => {
      expect(isIsogram('Adam')).toBe(false);
    }
  );

  it(
    'should return false for a word with repeating letters in mixed case '
    + '"Oops"',
    () => {
      expect(isIsogram('Oops')).toBe(false);
    }
  );

  it('should return true for a single letter "a"', () => {
    expect(isIsogram('a')).toBe(true);
  });

  it('should return true for mixed case unique letters "AbCdEf"', () => {
    expect(isIsogram('AbCdEf')).toBe(true);
  });
});
