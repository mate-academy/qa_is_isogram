'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`'true' if has no repeating letters`, () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it(`'false' if has repeating letters`, () => {
    expect(isIsogram('look')).toBe(false);
  });

  it(`'false' if has repeating capital letters`, () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it(`'true' for empty argument`, () => {
    expect(isIsogram('')).toBe(true);
  });
});
