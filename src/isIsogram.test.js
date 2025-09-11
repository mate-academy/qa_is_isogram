'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  test(`jetpack`, () => {
    expect(isIsogram('jetpack'))
      .toBe(true);
  });

  test(`nookie`, () => {
    expect(isIsogram('nookie'))
      .toBe(false);
  });

  test(`Polo`, () => {
    expect(isIsogram('Polo'))
      .toBe(false);
  });

  test(`space`, () => {
    expect(isIsogram(' '))
      .toBe(true);
  });
});
