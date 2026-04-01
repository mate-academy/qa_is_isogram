'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`return true if takes empty string`, () => {
    expect(isIsogram('')).toBeTruthy();
  });

  it(`should be case-insensative`, () => {
    expect(isIsogram('Adam')).toBeFalsy();
  });

  it(`should return true if takes no repeatings letters`, () => {
    expect(isIsogram('playgrounds')).toBeTruthy();
  });

  it(`should return false if takes repeatings letters`, () => {
    expect(isIsogram('Oops')).toBeFalsy();
  });
});
