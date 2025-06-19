'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return true for an empty string`, () => {
    const result = isIsogram('');

    expect(result).toBe(true);
  });

  it(`should return true for a single character`, () => {
    const result = isIsogram('a');

    expect(result).toBe(true);
  });

  it(`should return true for playgrounds string`, () => {
    const result = isIsogram('playgrounds');

    expect(result).toBe(true);
  });

  it(`should return false for look string`, () => {
    const result = isIsogram('look');

    expect(result).toBe(false);
  });

  it(`should return false for a string with repeated characters`, () => {
    const result = isIsogram('hello');

    expect(result).toBe(false);
  });

  it(`should return false for Adam string`, () => {
    const result = isIsogram('Adam');

    expect(result).toBe(false);
  });

  it(`should return false for Oops string`, () => {
    const result = isIsogram('Oops');

    expect(result).toBe(false);
  });
});
