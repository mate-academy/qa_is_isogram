'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it('should be declared', () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should consider empty string as an isogram', () => {
    expect(isIsogram('')).toBeTruthy();
  });

  it('should not work with repeating characters', () => {
    expect(isIsogram('aba')).toBeFalsy();
  });

  it('should be case insensitive', () => {
    expect(isIsogram('AaBa')).toBeFalsy();
  });
});
