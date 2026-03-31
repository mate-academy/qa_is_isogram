'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should return true for an isogram word "quality"', () => {
    expect(isIsogram('quality')).toBe(true);
  });

  it('should return false for a non-isogram word "assurance"', () => {
    expect(isIsogram('assurance')).toBe(false);
  });

  it('should return false for a non-isogram word "Tetiana"', () => {
    expect(isIsogram('Tetiana')).toBe(false);
  });
});
