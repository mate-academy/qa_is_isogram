'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return true for empty string`, () => {
    const result = isIsogram('');

    expect(result)
      .toBe(true);
  });

  it(`should return false for repeated letters`, () => {
    const result = isIsogram('Cool');

    expect(result)
      .toBe(false);
  });

  it(`should be case-insensitive`, () => {
    const result = isIsogram('Dad');

    expect(result)
      .toBe(false);
  });

  it(`should return true for the string with unique letters`, () => {
    const result = isIsogram('tech');

    expect(result)
      .toBe(true);
  });
});
