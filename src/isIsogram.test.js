'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should return true if 'word' === ''`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`should return false if 'word' includes repeating letters.`, () => {
    expect(isIsogram('Oops')).toBe(false);
    expect(isIsogram('look')).toBe(false);
    expect(isIsogram('Adam')).toBe(false);
  });

  it(`should return true if 'word' doesn't include repeating letters.`, () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });
});
