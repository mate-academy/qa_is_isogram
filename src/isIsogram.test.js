'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should be playground`, () => {
    expect(isIsogram(`playgrounds`)).toBe(true);
  });

  it(`should be look`, () => {
    expect(isIsogram(`look`)).toBe(false);
  });

  it(`should be Adam`, () => {
    expect(isIsogram(`Adam`)).toBe(false);
  });

  it(`should be ...`, () => {
    expect(isIsogram(``)).toBe(true);
  });
});
