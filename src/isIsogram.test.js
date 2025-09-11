'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should consider empty string as isogram`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`should be case-insensitive`, () => {
    expect(isIsogram('Oops')).toBe(false);
  });

  it(`should return true for 'playgrounds'`, () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it(`should return fasle for 'look'`, () => {
    expect(isIsogram('look')).toBe(false);
  });

  it(`should return true for single char`, () => {
    expect(isIsogram('a')).toBe(true);
  });

  it(`should return true for isogram with special chars`, () => {
    expect(isIsogram('123*#asdf')).toBe(true);
  });

  it(`should return false for not unique input with special chars`, () => {
    expect(isIsogram('123-*-#asdf')).toBe(false);
  });
});
