'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`returns true for isograms`, () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it(`returns false for repeated letters`, () => {
    expect(isIsogram('look')).toBe(false);
  });

  it(`is case-insensitive`, () => {
    expect(isIsogram('Adam')).toBe(false);
    expect(isIsogram('Oops')).toBe(false);
  });

  it(`should be an empty line`, () => {
    expect(isIsogram('')).toBe(true);
  });
});
