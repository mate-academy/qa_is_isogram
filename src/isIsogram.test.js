'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });
  
  it('should return true for an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should return true for a single-character string', () => {
    expect(isIsogram('a')).toBe(true);
    expect(isIsogram('Z')).toBe(true);
  });

  it('should return true for a lowercase isogram', () => {
    expect(isIsogram('lumberjacks')).toBe(true);
    expect(isIsogram('background')).toBe(true);
  });

  it('should return true for an uppercase isogram', () => {
    expect(isIsogram('BACKGROUND')).toBe(true);
    expect(isIsogram('UNCOPYRIGHTABLE')).toBe(true);
  });

  it('should return true for a mixed-case isogram', () => {
    expect(isIsogram('BaCkGrOuNd')).toBe(true);
    expect(isIsogram('IsOgRaM')).toBe(true);
  });

  it('should return false for a non-isogram (same case)', () => {
    expect(isIsogram('hello')).toBe(false);
    expect(isIsogram('apple')).toBe(false);
  });

  it('should return false for a non-isogram (different case)', () => {
    expect(isIsogram('MoOse')).toBe(false);
    expect(isIsogram('AbCdEfGa')).toBe(false);
  });
});
