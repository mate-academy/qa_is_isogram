'use strict';

const { isIsogram } = require('./isIsogram');

describe('isIsogram', () => {
  it('should return true for an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should return true for an isogram string like "playgrounds"', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it('should return false for a non-isogram string like "look"', () => {
    expect(isIsogram('look')).toBe(false);
  });

  it('should return false for a non-isogram string like "Adam"', () => {
    expect(isIsogram('Adam')).toBe(false);
  });
});
