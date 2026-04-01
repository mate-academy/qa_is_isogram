'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return true for an empty string`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`should return true for a valid isogram like 'playgrounds'`, () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it(`should return false for a word with repeating letters like 'look`, () => {
    expect(isIsogram('look')).toBe(false);
  });

  it(`should return false for a case-insensitive repeat like 'Adam'`, () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it(
    `should return false for a word with multiple repeated letters like 'Oops'`,
    () => {
      expect(isIsogram('Oops')).toBe(false);
    }
  );

  it(
    `should return true for a mixed-case isogram like 'Dermatoglyphics'`,
    () => {
      expect(isIsogram('Dermatoglyphics')).toBe(true);
    }
  );
});
