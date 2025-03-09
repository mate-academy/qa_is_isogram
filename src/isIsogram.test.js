'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`the empty string is an isogram`, () => {
    expect(isIsogram(''))
      .toBe(true);
  });

  it(`should be case-insensitive`, () => {
    expect(isIsogram('Mom'))
      .toBe(false);
  });

  it(`should be isogram 1`, () => {
    expect(isIsogram('aktior'))
      .toBe(true);
  });

  it(`should not be isogram 1`, () => {
    expect(isIsogram('aktiora'))
      .toBe(false);
  });

  it(`should not be isogram 2`, () => {
    expect(isIsogram('aakt'))
      .toBe(false);
  });

  it(`should not be isogram 3`, () => {
    expect(isIsogram('aktt'))
      .toBe(false);
  });

  it(`should not be isogram 4`, () => {
    expect(isIsogram('akkt'))
      .toBe(false);
  });
});
