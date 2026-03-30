'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return true for 'Dermatoglyphics'`, () => {
    expect(isIsogram('Dermatoglyphics')).toBe(true);
  });

  it(`should return true for 'isogram'`, () => {
    expect(isIsogram('isogram')).toBe(true);
  });

  it(`should return false for 'banana'`, () => {
    expect(isIsogram('banana')).toBe(false);
  });

  it(`should return false for 'moOse'`, () => {
    expect(isIsogram('moOse')).toBe(false);
  });

  it(`should return true for ''`, () => {
    expect(isIsogram('')).toBe(true);
  });
});
