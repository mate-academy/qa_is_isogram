'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`true for an empty string`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`true for unique letters`, () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it(`false for repeated letters`, () => {
    expect(isIsogram('dd')).toBe(false);
  });

  it(`false if case-insensitive match`, () => {
    expect(isIsogram('Mom')).toBe(false);
  });

  it(`false for consecutive repeat`, () => {
    expect(isIsogram('Moon')).toBe(false);
  });
});
