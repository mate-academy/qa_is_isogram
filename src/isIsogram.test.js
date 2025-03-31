'use strict';

const { isIsogram } = require('./isIsogram');

describe('isIsogram', () => {
  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`return 'true' for the word `
    + `with no repeating letters`, () => {
    const result = isIsogram('playgrounds');

    expect(result).toBe(true);
  });

  it(`return 'false' for the word `
    + `with consecutive repeated letters`, () => {
    const result = isIsogram('look');

    expect(result).toBe(false);
  });

  it(`return 'false' for the word `
    + `with non-consecutive repeated letters`, () => {
    const result = isIsogram('every');

    expect(result).toBe(false);
  });

  it(`should be case-insensitive`, () => {
    const result = isIsogram('Adam');

    expect(result).toBe(false);
  });

  it(`an empty string should be considered an isogram`, () => {
    const result = isIsogram('');

    expect(result).toBe(true);
  });
});
