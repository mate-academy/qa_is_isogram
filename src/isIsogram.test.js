/* eslint-disable */
'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it('should be declared', () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('returns true for a valid isogram', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it('returns false for a word with a repeated letter', () => {
    expect(isIsogram('look')).toBe(false);
  });

  it('returns false for a word with repeated letters in different cases', () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it('returns true for an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('returns false for a mixed-case word with duplicate letters', () => {
    expect(isIsogram('Oops')).toBe(false);
  });
});
