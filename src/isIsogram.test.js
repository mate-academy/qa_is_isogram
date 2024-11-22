'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return "false" if 'word' has repeating letters`, () => {
    expect(isIsogram('look')).toBe(false);
  });

  it(`should return "true" if 'word' has no repeating letters`, () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it(`should return "true" if 'word' is empty`, () => {
    expect(isIsogram('')).toBe(true);
  });
});
