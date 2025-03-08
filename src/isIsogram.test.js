'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true if comes an empty string', () => {
    expect(isIsogram('')).toBeTruthy();
  });

  it(`should return 'true' if letters are not repeated`, () => {
    expect(isIsogram('playgrounds')).toBeTruthy();
  });

  it(`should return 'false' if letters are repeated`, () => {
    expect(isIsogram('look')).toBeFalsy();
  });

  it(`should return 'true' if letters are not`
    + ` repeated regardless of case`, () => {
    expect(isIsogram('PlayGrouNDS')).toBeTruthy();
  });

  it(`should return 'false' if letters are not`
    + ` repeated regardless of case`, () => {
    expect(isIsogram('LOok')).toBeFalsy();
  });
});
