'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return true for an empty line`, () => {
    expect(isIsogram(''))
      .toBe(true);
  });

  it(`should return false for words with repeating letters`, () => {
    expect(isIsogram('look'))
      .toBe(false);

    expect(isIsogram('oops'))
      .toBe(false);

    expect(isIsogram('adam'))
      .toBe(false);
  });

  it(`should be case insensitive`, () => {
    expect(isIsogram('Adam'))
      .toBe(false);

    expect(isIsogram('oOps'))
      .toBe(false);

    expect(isIsogram('bOo'))
      .toBe(false);
  });

  it(`should return true for a valid isogram`, () => {
    expect(isIsogram('playgrounds'))
      .toBe(true);

    expect(isIsogram('isogram'))
      .toBe(true);

    expect(isIsogram('false'))
      .toBe(true);
  });
});
