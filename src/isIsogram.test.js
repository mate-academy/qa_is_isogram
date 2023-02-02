'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return true for an isogram`, () => {
    expect(isIsogram('playgrounds'))
      .toBe(true);
  });

  it(`should return true for empty string`, () => {
    expect(isIsogram(''))
      .toBe(true);
  });

  it(`should return false if the word has 2 the same letters`, () => {
    expect(isIsogram('look'))
      .toBe(false);
  });

  it(`should return false if the word has 3 the same letters`, () => {
    expect(isIsogram('lookout'))
      .toBe(false);
  });

  it(`should return false if several letters repeat`, () => {
    expect(isIsogram('attention'))
      .toBe(false);
  });

  it(`should return false if the same letters in different registers`, () => {
    expect(isIsogram('Adam'))
      .toBe(false);
  });
});
