'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for an empty string', () => {
    expect(isIsogram('')).toEqual(true);
  });

  it('should return true for a string with digits in any case', () => {
    expect(isIsogram('playgrounds')).toEqual(true);
    expect(isIsogram('look')).toEqual(false);
    expect(isIsogram('Oops')).toEqual(false);
  });
});
