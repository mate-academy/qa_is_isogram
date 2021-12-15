'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should be true when empty line', () => {
    expect(isIsogram('')).toEqual(true);
  });

  it('should be true when letters are not the same', () => {
    expect(isIsogram('playgrounds')).toEqual(true);
  });

  it('should be false when letters the same', () => {
    expect(isIsogram('look')).toEqual(false);
  });

  it('should return true, when letters case-insensitive', () => {
    expect(isIsogram('Faus')).toEqual(true);
  });
});
