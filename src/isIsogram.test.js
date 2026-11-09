'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it('should be declared', () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should return true for an isogram word', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it('should return false for consecutive duplicates', () => {
    expect(isIsogram('look')).toBe(false);
  });

  it('should return false for case duplicates', () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it('should return false for mixed case duplicates', () => {
    expect(isIsogram('Oops')).toBe(false);
  });
});
