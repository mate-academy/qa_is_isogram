'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return a boolean`, () => {
    expect(typeof isIsogram('playgrounds'))
      .toBe('boolean');
  });

  it(`should return 'true' when input is 'playgrounds'`, () => {
    expect(isIsogram('playgrounds'))
      .toBe(true);
  });

  it(`should return 'true' when input is ''`, () => {
    expect(isIsogram(''))
      .toBe(true);
  });

  it(`should return 'false' when input is 'look'`, () => {
    expect(isIsogram('look'))
      .toBe(false);
  });

  it(`should return 'false' when input is 'Adam'`, () => {
    expect(isIsogram('Adam'))
      .toBe(false);
  });
});
