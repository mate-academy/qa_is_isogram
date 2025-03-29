'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return true for an empty string`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`should return true for the word 'hello'`, () => {
    expect(isIsogram('hello')).toBe(false);
  });

  it(`should return true for the word 'world'`, () => {
    expect(isIsogram('world')).toBe(true);
  });

  it(`should return true for the word 'isogram'`, () => {
    expect(isIsogram('isogram')).toBe(true);
  });

  it(`should return false for the word 'moon'`, () => {
    expect(isIsogram('moon')).toBe(false);
  });

  it(`should return false for the word 'bookkeeper'`, () => {
    expect(isIsogram('bookkeeper')).toBe(false);
  });
});
