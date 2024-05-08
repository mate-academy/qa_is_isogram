'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('no repeating letters', () => {
    const result = isIsogram('wonderful');

    expect(result).toEqual(true);
  });

  it('is case insensitive', () => {
    const result = isIsogram('CoOl');

    expect(result).toEqual(false);
  });

  it('returns true for an empty argument', () => {
    const result = isIsogram('');

    expect(result).toEqual(true);
  });
});
