'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return true if string is empty`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`should return true if word has no repeating letters`, () => {
    expect(isIsogram('me')).toBe(true);
    expect(isIsogram('you')).toBe(true);
    expect(isIsogram('who')).toBe(true);
  });

  it(`should return false if word has repeating letters`, () => {
    expect(isIsogram('Maxim')).toBe(false);
    expect(isIsogram('Mom')).toBe(false);
    expect(isIsogram('letter')).toBe(false);
  });
});
