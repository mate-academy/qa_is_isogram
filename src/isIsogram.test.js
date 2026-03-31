'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return true for an empty string`, () => {
    expect(isIsogram('')).toBeTruthy();
  });

  it(`should return true for 'playgrounds'`, () => {
    expect(isIsogram('playgrounds')).toBeTruthy();
  });

  it(`should return false for 'look'`, () => {
    expect(isIsogram('look')).toBeFalsy();
  });

  it(`should return false for 'Adam'`, () => {
    expect(isIsogram('Adam')).toBeFalsy();
  });

  it(`should return false for 'Oops'`, () => {
    expect(isIsogram('Oops')).toBeFalsy();
  });

  it(`should return true for 'isogram'`, () => {
    expect(isIsogram('isogram')).toBeTruthy();
  });
});
