'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return true if value is empty`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`should return 'true'
    when the repeated letter is a Cyrillic letter`, () => {
    expect(isIsogram('schoоl')).toBe(true);
  });

  it(`should return 'true' when entering one letter`, () => {
    expect(isIsogram('s')).toBe(true);
  });

  it(`string that has no repeating letters,
    case-insensetive, should return true`, () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it(`String with letters repeating, case-sensetive,
    should return false`, () => {
    expect(isIsogram('look')).toBe(false);
    expect(isIsogram('loOk')).toBe(false);
  });
});
