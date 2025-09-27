/* eslint-disable max-len */
'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it('should be declared', () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should return true for a word with all unique letters', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it('should return false for a word with repeated letters', () => {
    expect(isIsogram('look')).toBe(false);
  });

  it(
    "should return false for a word with repeated letters in different cases (case-insensitive) - 'Adam'",
    () => {
      expect(isIsogram('Adam')).toBe(false);
    }
  );

  it(
    "should return false for a word with repeating letters in different cases (non-consecutive) - 'Oops'",
    () => {
      expect(isIsogram('Oops')).toBe(false);
    }
  );
});
