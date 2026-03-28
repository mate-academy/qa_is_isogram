'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`checks valid string`, () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it(`fails for 2 consecutive repeating letters`, () => {
    expect(isIsogram('look')).toBe(false);
  });

  it(`fails for lower and upper cases letter`, () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it(`pass for empty string`, () => {
    expect(isIsogram('')).toBe(true);
  });
});
