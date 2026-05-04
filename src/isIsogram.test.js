'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should be true if 'word' is isogram`, () => {
    expect(isIsogram('playgrounds')).toBeTruthy();
  });

  it(`should be false if 'word' is not isogram`, () => {
    expect(isIsogram('look')).toBeFalsy();
  });

  it(`should be false if 'word' contains the same letters in different cases`, () => {
    expect(isIsogram('Adam')).toBeFalsy();
    expect(isIsogram('Oops')).toBeFalsy();
  });

  it(`should be true if 'word' is empty string`, () => {
    expect(isIsogram('')).toBeTruthy();
  });
});
