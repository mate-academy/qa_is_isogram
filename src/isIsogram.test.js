'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof isIsogram('')).toBe('boolean');
  });

  it(`should return true for ''`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`should return true for 'playgrounds'`, () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it(`should return false for 'look'`, () => {
    expect(isIsogram('look')).toBe(false);
  });

  it(`should return false for 'Adam'`, () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it(`should be case-insensitive`, () => {
    expect(isIsogram('Oops')).toBe(false);
  });
});
