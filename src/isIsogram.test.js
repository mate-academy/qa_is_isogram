'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it('should be declared', () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('returns true for "playgrounds" (no repeats)', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it('returns false for "look" (consecutive repeats)', () => {
    expect(isIsogram('look')).toBe(false);
  });

  it('returns false for "Adam" (mixed case repeats)', () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it('returns true for an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('returns false for "Oops" (mixed case repeats)', () => {
    expect(isIsogram('Oops')).toBe(false);
  });
});
