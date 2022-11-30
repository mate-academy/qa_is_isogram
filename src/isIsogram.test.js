'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`empty string`, () => {
    expect(isIsogram('')).toBeTruthy();
  });

  it(`word with no repeating letters`, () => {
    expect(isIsogram('playgrounds')).toBeTruthy();
  });

  it(`word in diff case with no repeating letters`, () => {
    expect(isIsogram('PlayGrounds')).toBeTruthy();
  });
});

describe('isNOTIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`word with repeating letters`, () => {
    expect(isIsogram('Adam')).toBeFalsy();
  });

  it(`throw error if not string`, () => {
    expect(() => isIsogram(2)).toThrow();
  });
});
