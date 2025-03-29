'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram)
      .toBeInstanceOf(Function);
  });

  it(`should return 'true' if word is an isogram`, () => {
    expect(isIsogram('playgrounds'))
      .toBe(true);
  });

  it(`should return 'true' if word is empty`, () => {
    expect(isIsogram(''))
      .toBe(true);
  });

  it(`should return 'false' if word is not an isogram`, () => {
    expect(isIsogram('look'))
      .toBe(false);
  });

  it(`should be case insensitive`, () => {
    expect(isIsogram('Adam'))
      .toBe(false);
  });
});
