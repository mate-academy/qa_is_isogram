'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(isIsogram('watch')).toEqual(expect.any(Boolean));
  });

  it(`should return true if params is an empty string`, () => {
    expect(isIsogram('')).toEqual(true);
  });

  it(`should return true if params has no repeating letters`, () => {
    expect(isIsogram('playgrounds')).toEqual(true);
  });

  it(`should be case-insensitive`, () => {
    expect(isIsogram('Adam')).toEqual(false);
  });
});
