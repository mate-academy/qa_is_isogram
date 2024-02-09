'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`should treat 'M' and 'm' as the same letter`, () => {
    expect(isIsogram('Mm')).toBe(false);
  });

  it('should return true if entered string has no repeatings', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it('should return false if entered string has repeatings', () => {
    expect(isIsogram('look')).toBe(false);
  });

  it('should return false if entered string has repeatings', () => {
    expect(isIsogram('Adam')).toBe(false);
  });
});
