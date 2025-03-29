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

  it('should return true for an 1-char isogram', () => {
    expect(isIsogram('f')).toBeTruthy();
  });

  it('should return true for non-Latin valid isogram', () => {
    expect(isIsogram('мова')).toBeTruthy();
  });

  it('should return false for an non-Latin invalid isogram', () => {
    expect(isIsogram('курка')).toBeFalsy();
  });
});
