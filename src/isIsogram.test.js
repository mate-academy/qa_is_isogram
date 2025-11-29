'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`playgrounds should be true`, () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it(`look should be false`, () => {
    expect(isIsogram('look')).toBe(false);
  });

  it(`Adam should be false`, () => {
    const normalized = isIsogram('Adam');

    expect(normalized).toBe(false);
  });

  it(`'' should be true`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`Oops should be false`, () => {
    const normalized = isIsogram('Oops');

    expect(normalized).toBe(false);
  });
});
