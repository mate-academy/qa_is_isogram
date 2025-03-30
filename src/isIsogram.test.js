'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should handle empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should handle single character string', () => {
    expect(isIsogram('a')).toBe(true);
  });

  it('should handle repeated characters', () => {
    expect(isIsogram('look')).toBe(false);
    expect(isIsogram('Adam')).toBe(false);
  });

  it('should handle non-alphabetic characters', () => {
    expect(isIsogram('playgrounds!')).toBe(true);
    expect(isIsogram('123')).toBe(true);
  });

  it('should handle numbers as input', () => {
    expect(() => isIsogram(123)).toThrow();
  });

  it('should handle null or undefined as input', () => {
    expect(() => isIsogram(null)).toThrow();
    expect(() => isIsogram(undefined)).toThrow();
  });

  it('should ignore non-alphabetic characters', () => {
    expect(isIsogram('a1b2c3')).toBe(true);
    expect(isIsogram('!@#$%')).toBe(true);
    expect(isIsogram('a!b@c#')).toBe(true);
  });
});
