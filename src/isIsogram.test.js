'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should return true = "playgrounds"', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it('should return false = "look"', () => {
    expect(isIsogram('look')).toBe(false);
  });

  it('should return false = "Adam"', () => {
    expect(isIsogram('Adam')).toBe(false);
  });
});
