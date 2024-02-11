'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram)
      .toBeInstanceOf(Function);
  });

  it(`Empty line should return true`, () => {
    expect(isIsogram(''))
      .toBe(true);
  });

  it(`String that has no repeating letters, 
  case-insensetive, should return true`, () => {
    expect(isIsogram('playgrounds'))
      .toBe(true);
  });

  it(`String with letters repeating, case-sensetive, 
  should return false`, () => {
    expect(isIsogram('look'))
      .toBe(false);

    expect(isIsogram('loOk'))
      .toBe(false);
  });

  it(`Non valid input should return false`, () => {
    expect(isIsogram(null))
      .toBe(false);

    expect(isIsogram(1234567890))
      .toBe(false);

    expect(isIsogram(-456))
      .toBe(false);
  });
});
