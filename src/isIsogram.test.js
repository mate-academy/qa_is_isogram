'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should be return true when word is isogram`, () => {
    expect(isIsogram('playgrounds')).toBeTruthy();
  });

  it(`should be return true when word is empty`, () => {
    expect(isIsogram('')).toBeTruthy();
  });

  it(`should be return false when word isn't isogram`, () => {
    expect(isIsogram('look')).toBeFalsy();
  });

  it(`should be return true when word contain
     the same letters in different register`, () => {
    expect(isIsogram('Oops')).toBeFalsy();
  });
});
