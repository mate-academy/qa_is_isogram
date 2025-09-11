'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return "true" for empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should be case insensitive', () => {
    expect(isIsogram('mM')).toBe(false);
  });

  it('returns "true" for correct isogram', () => {
    expect(isIsogram('lucky dog')).toBe(true);
  });

  it('returns "false" for incorrect isogram', () => {
    expect(isIsogram('Pineapple')).toBe(false);
  });
});
