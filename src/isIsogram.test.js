'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return 'true' when argument is ''`, () => {
    const result = isIsogram('');

    expect(result).toEqual(true);
  });

  it(`should return 'false' when argument is 'look'`, () => {
    const result = isIsogram('look');

    expect(result).toEqual(false);
  });

  it(`should be case-insensitive'`, () => {
    const result = isIsogram('Adam');

    expect(result).toEqual(false);
  });

  it(`should return 'true' when argument is 'playgrounds'`, () => {
    const result = isIsogram('playgrounds');

    expect(result).toEqual(true);
  });
});
