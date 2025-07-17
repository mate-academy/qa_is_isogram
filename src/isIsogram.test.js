'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return true for 'playgrounds'`, () => {
    expect(isIsogram('playgrounds')).toBeTruthy();
  });

  it(`should return false for 'look'`, () => {
    expect(isIsogram('look')).toBeFalsy();
  });

  it(`should return true for ''`, () => {
    expect(isIsogram('')).toBeTruthy();
  });

  it(`should return false for 'Oops'`, () => {
    expect(isIsogram('Oops')).toBeFalsy();
  });
});
