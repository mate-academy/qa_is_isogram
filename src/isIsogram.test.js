'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return "true" for an empty string', () => {
    expect(isIsogram(''))
      .toEqual(true);
  });

  it('should be case-insensitive', () => {
    expect(isIsogram('Adam'))
      .toEqual(false);
  });

  it('should return "true" for word that has no repeating letters', () => {
    expect(isIsogram('playgrounds'))
      .toEqual(true);
  });

  it('should return "false" for word that has repeating letters', () => {
    expect(isIsogram('look'))
      .toEqual(false);
  });
});
