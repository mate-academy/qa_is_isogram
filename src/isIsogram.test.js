'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('returns true for an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('returns true for a valid isogram', () => {
    expect(isIsogram('isogram')).toBe(true);
    expect(isIsogram('background')).toBe(true);
    expect(isIsogram('Dermatoglyphics')).toBe(true);
  });

  it('returns false when a letter repeats', () => {
    expect(isIsogram('aba')).toBe(false);
    expect(isIsogram('moose')).toBe(false);
    expect(isIsogram('isIsogram')).toBe(false);
  });

  it('ignores case when checking duplicates', () => {
    expect(isIsogram('moOse')).toBe(false);
    expect(isIsogram('ABcdefGa')).toBe(false);
  });

  it('returns true for single-letter strings', () => {
    expect(isIsogram('a')).toBe(true);
    expect(isIsogram('Z')).toBe(true);
  });
});
