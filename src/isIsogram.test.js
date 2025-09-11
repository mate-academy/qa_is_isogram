'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return 'true' for correct isogram`, () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it(`should return 'false' for double letters`, () => {
    expect(isIsogram('look')).toBe(false);
  });

  it(`should return 'false' for case-sensitive double letters`, () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it(`should return 'true' for empty string`, () => {
    expect(isIsogram('')).toBe(true);
  });
});
