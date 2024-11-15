'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return true for the word "playgrounds"`, () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it(`should return false for the word "look"`, () => {
    expect(isIsogram('look')).toBe(false);
  });

  it(`should return false for the word "Adam" (case-insensitive)`, () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it(`should return false  for the word "Oops" (case-insensitive)`, () => {
    expect(isIsogram('Oops')).toBe(false);
  });

  it(`should return false for the word "repetitions"`, () => {
    expect(isIsogram('repetitions')).toBe(false);
  });

  it(`should return true for the word "isogram"`, () => {
    expect(isIsogram('isogram')).toBe(true);
  });
});
