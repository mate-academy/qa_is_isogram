'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it('should be declared', () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for a word with all unique letters', () => {
    expect(isIsogram('playgrounds')).toBeTruthy();
  });

  it('should return false for a word with repeating letters', () => {
    expect(isIsogram('look')).toBeFalsy();
  });

  it('should be case-insensitive when checking for duplicates', () => {
    expect(isIsogram('Adam')).toBeFalsy();
  });

  it('should return true for an empty string', () => {
    expect(isIsogram('')).toBeTruthy();
  });
});
