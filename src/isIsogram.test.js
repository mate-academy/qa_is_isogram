'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`enters izogram`, () => {
    expect(isIsogram('horse')).toBe(true);
  });

  it(`enters not izogram`, () => {
    expect(isIsogram('mathematic')).toBe(false);
  });

  it(`enters with Uppercase not izogram`, () => {
    expect(isIsogram('Clock')).toBe(false);
  });

  it(`enters with Uppercase izogram`, () => {
    expect(isIsogram('Term')).toBe(true);
  });

  it(`enters with Uppercase izogram`, () => {
    expect(isIsogram('')).toBe(true);
  });
});
