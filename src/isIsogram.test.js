'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for an isogram', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it('should return false for incorrect word', () => {
    expect(isIsogram('look')).toBe(false);
  });

  it(`should return false for word 'Adam'`, () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it(`should return true for empty string`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`should return false for word 'Oops'`, () => {
    expect(isIsogram('Oops')).toBe(false);
  });
});
