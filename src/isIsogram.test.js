'use strict';

const { isIsogram } = require('./isIsogram');

describe('isIsogram', () => {
  it('should be declared as a function', () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should return true for a lowercase isogram', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it('should return false for a word with repeating letters', () => {
    expect(isIsogram('look')).toBe(false);
  });

  it('should return false for a case-insensitive repeating letter', () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it(
    'should return false for a word with consecutive repeating letters',
    () => {
      expect(isIsogram('Oops')).toBe(false);
    }
  );

  it(
    'should return true for a word that has mixed casing '
    + 'but no repeating letters',
    () => {
      expect(isIsogram('Dermatoglyphics')).toBe(true); // Valid isogram
    }
  );

  it('should return true for a single-letter word', () => {
    expect(isIsogram('a')).toBe(true);
  });

  it('should return false for a word where multiple letters repeat', () => {
    expect(isIsogram('banana')).toBe(false);
  });
});
