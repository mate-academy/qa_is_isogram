'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should be true for 'playgrounds'`, () => {
    const result = isIsogram('playgrounds');

    expect(result).toBeTruthy();
  });

  it(`should be false for 'look'`, () => {
    const result = isIsogram('look');

    expect(result).toBeFalsy();
  });

  it(`should be false for 'Adam'`, () => {
    const result = isIsogram('Adam');

    expect(result).toBeFalsy();
  });

  it("returns false for 'Oops'", () => {
    const result = isIsogram('Oops');

    expect(result).toBeFalsy();
  });

  it(`should be true for empty string`, () => {
    const result = isIsogram('');

    expect(result).toBeTruthy();
  });
});
