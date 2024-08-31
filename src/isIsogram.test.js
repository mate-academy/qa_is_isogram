'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return 'true', if 'playgrounds'`, () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it(`should return 'false', if 'look'`, () => {
    expect(isIsogram('look')).toBe(false);
  });

  it(`should return 'false', if 'Adam'`, () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it(`should return 'true', if empty string`, () => {
    expect(isIsogram('')).toBe(true);
  });
});
