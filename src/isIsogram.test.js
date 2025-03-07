'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should be an isogram`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`should be an isogram`, () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it(`should be an isogram`, () => {
    expect(isIsogram('Playgrounds')).toBe(true);
  });

  it(`should be an isogram`, () => {
    expect(isIsogram('look')).toBe(false);
  });

  it(`should be an isogram`, () => {
    expect(isIsogram('Adam')).toBe(false);
  });
});
