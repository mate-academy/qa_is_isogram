'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return true if word is isogram`, () => {
    const result = isIsogram('playgrounds')
    expect(result).toBe(true);
  });

  it(`should return true if word is isogram in LowerCase`, () => {
    const result = isIsogram('PlaygRounds')
    expect(result).toBe(true);
  });

  it(`should return true if word ''`, () => {
    const result = isIsogram('')
    expect(result).toBe(true);
  });

  it(`should return false if word isn't isogram`, () => {
    const result = isIsogram('look')
    expect(result).toBe(false);
  });

  it(`should return false if word isn't isogram in LowerCase`, () => {
    const result = isIsogram('Madam')
    expect(result).toBe(false);
  });

  it(`should return false if word isn't string`, () => {
    const result = isIsogram(12)
    expect(result).toBe(false);
  });
});
