'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should be an isogram when passed an empty string`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`should be case-insensitive`, () => {
    expect(isIsogram('Momo')).toBe(false);
  });

  it(`should be case-insensitive`, () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it('should return false for non-isograms', () => {
    expect(isIsogram('look')).toBe(false);
  });

  it('should return false for non-isograms', () => {
    expect(isIsogram('mama')).toBe(false);
  });

  it('should return true for isograms', () => {
    expect(isIsogram('playground')).toBe(true);
  });
});
