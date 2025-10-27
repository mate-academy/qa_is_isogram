'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true if empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should be case-insensitive', () => {
    expect(isIsogram('Adam')).toBe(false);
    expect(isIsogram('Oops')).toBe(false);
  });

  it('should be no repeating letters', () => {
    expect(isIsogram('alphabet')).toBe(false);
    expect(isIsogram('resource')).toBe(false);
  });

  it('should be no consecutive letters', () => {
    expect(isIsogram('look')).toBe(false);
    expect(isIsogram('oops')).toBe(false);
  });

  it('should be an isogram', () => {
    expect(isIsogram('playgrounds')).toBe(true);
    expect(isIsogram('isogram')).toBe(true);
  });
});
