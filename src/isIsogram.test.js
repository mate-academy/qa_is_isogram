'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return 'false' if argument is not a string`, () => {
    expect(isIsogram(42)).toBe(false);
  });

  it(`should return 'true' if argument is empty string`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`should return 'true' for a single character 'a'`, () => {
    expect(isIsogram('a')).toBe(true);
    expect(isIsogram('Z')).toBe(true);
  });

  it(`should be case-insensitive 'M' or 'm' return 'true'`, () => {
    expect(isIsogram('CaSe')).toBe(true);
  });

  it(`should return 'true' if argument has no repeating letters`, () => {
    expect(isIsogram('playgrounDs')).toBe(true);
  });

  it(`should return 'false' if argument has repeating letters`, () => {
    expect(isIsogram('Aab')).toBe(false);
    expect(isIsogram('azZ')).toBe(false);
  });
});
