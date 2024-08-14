'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should be declared`, () => {
    expect(isIsogram('look')).toBe(false);
  });

  it(`should be declared`, () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it(`should be declared`, () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });
});
