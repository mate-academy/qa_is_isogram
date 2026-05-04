'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return 'true' for an empty string`, () => {
    const result = isIsogram('');

    expect(result).toBeTruthy();
  });

  it(`should return 'true' for a word that has no repeated letters`, () => {
    const result = isIsogram('playgrounds');

    expect(result).toBeTruthy();
  });

  it(`should return 'false' for a word that has repeated letters`, () => {
    const result = isIsogram('look');

    expect(result).toBeFalsy();
  });

  it('should be case-insensitive', () => {
    const result1 = isIsogram('Adam');
    const result2 = isIsogram('Oops');

    expect(result1).toBeFalsy();
    expect(result2).toBeFalsy();
  });
});
