'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return True when Isogram`, () => {
    expect(isIsogram('playgrounds'))
      .toEqual(true);
  });

  it(`should return False when not an Isogram`, () => {
    expect(isIsogram('look'))
      .toEqual(false);
  });

  it(`should return False when not an Isogram`, () => {
    expect(isIsogram('Adam'))
      .toEqual(false);
  });

  it(`should return True when string is empty`, () => {
    expect(isIsogram(''))
      .toEqual(true);
  });
});
