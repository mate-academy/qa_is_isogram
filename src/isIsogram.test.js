'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return false when the 'word' contains numbers`, () => {
    expect(isIsogram('mate2024')).toBe(false);
  });

  it(`should return false if the 'word' contains special characters`, () => {
    expect(isIsogram('mate_2024')).toBe(false);
  });

  it(`should return false when the letters in the 'word' are repeated`, () => {
    expect(isIsogram('look')).toBe(false);
  });

  it(`should return true when the letters in the
    'word' are not repeated`, () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it(`should return true when the letters in the
    'word' contains an uppercase letter`, () => {
    expect(isIsogram('Dermatoglyphics')).toBe(true);
  });
});
