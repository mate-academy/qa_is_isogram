'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return 'true' when the word is isogram`, () => {
    expect(isIsogram('playgrounds')).toBeTruthy();
  });

  it(`should return 'false' when more than 1 letter repeats`, () => {
    expect(isIsogram('look')).toBeFalsy();
  });

  it(`should return 'false' when the letter repeats in uppercase`, () => {
    expect(isIsogram('Adam')).toBeFalsy();
  });

  it(`should return 'true' when there is no input`, () => {
    expect(isIsogram('')).toBeTruthy();
  });
});
