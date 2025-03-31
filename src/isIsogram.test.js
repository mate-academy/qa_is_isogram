/* eslint-disable max-len */
'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should return true for "playgrounds" (no repeating letters)', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it('should return false for "look" (repeating "o")', () => {
    expect(isIsogram('look')).toBe(false);
  });

  it('should return false for "Adam" (case-insensitive, repeating "a")', () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it('should return true for "isogram" (case-insensitive, no repeating letters)', () => {
    expect(isIsogram('isogram')).toBe(true);
  });

  it('should return false for "test" (repeating "t")', () => {
    expect(isIsogram('test')).toBe(false);
  });

  it('should return true for "Machine" (no repeating letters, case-insensitive)', () => {
    expect(isIsogram('Machine')).toBe(true);
  });
});
