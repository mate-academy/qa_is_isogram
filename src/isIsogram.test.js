'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return true if there are no repeated letters`, () => {
    expect(isIsogram('playgrounds')).toBeTruthy();
  });

  it(`should return false if there are repeated letters`, () => {
    expect(isIsogram('look')).toBeFalsy();
  });

  it(
    `should return false if there are 2 the same letters but in other cases`,
    () => {
      expect(isIsogram('Adam')).toBeFalsy();
    });

  it(`should return true if for empty string`, () => {
    expect(isIsogram('')).toBeTruthy();
  });
});
