'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for an isogram (e.g., "playgrounds")', () => {
    expect(isIsogram('playgrounds')).toBeTruthy();
  });

  it('should return false if letters are repeated (e.g., "look")', () => {
    expect(isIsogram('look')).toBeFalsy();
  });

  it('should be case insensitive (e.g., "Adam" is not an isogram)', () => {
    expect(isIsogram('Adam')).toBeFalsy();
  });

  it('should return true for an empty string', () => {
    expect(isIsogram('')).toBeTruthy();
  });
});
