'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for valid isogram', () => {
    expect(isIsogram('head')).toBeTruthy();
  });

  it('should return false for an invalid isogram', () => {
    expect(isIsogram('footer')).toBeFalsy();
  });

  it('should be case insensitive', () => {
    expect(isIsogram('CorE')).toBeTruthy();
  });

  it('should return true for empty string', () => {
    expect(isIsogram('')).toBeTruthy();
  });
});
