'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return a boolean`, () => {
    expect(typeof isIsogram(''))
      .toBe('boolean');
  });

  it(`should return 'true' when input is 'Playgrounds'`, () => {
    expect(isIsogram('Playgrounds'))
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

  it(`should return 'true' when input is empty`, () => {
    expect(isIsogram(''))
      .toBe(true);
  });
});
