'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    const result = isIsogram;

    expect(result)
      .toBeInstanceOf(Function);
  });

  it(`should be case insensitive`, () => {
    const result = isIsogram('Adam');

    expect(result)
      .toBe(false);
  });

  it(`should return true for isogram`, () => {
    const result = isIsogram('playgrounds');

    expect(result)
      .toBe(true);
  });

  it(`should return true for empty string`, () => {
    const result = isIsogram('');

    expect(result)
      .toBe(true);
  });

  it(`should return false for repeting letters`, () => {
    const result = isIsogram('look');

    expect(result)
      .toBe(false);
  });
});
