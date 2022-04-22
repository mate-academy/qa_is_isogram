'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return true if input 'playgrounds'`, () => {
    expect(isIsogram('playgrounds'))
      .toBe(true);
  });

  it(`should return false if input 'look'`, () => {
    expect(isIsogram('look'))
      .toBe(false);
  });

  it(`should return false if input 'Adam'`, () => {
    expect(isIsogram('Adam'))
      .toBe(false);
  });

  it(`should return true if input ''`, () => {
    expect(isIsogram(''))
      .toBe(true);
  });
});
