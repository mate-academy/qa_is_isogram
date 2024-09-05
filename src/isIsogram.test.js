'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return true for an empty string`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should return true for an isogram word', () => {
    expect(isIsogram('lumberjack')).toBe(true);
    expect(isIsogram('copyright')).toBe(true);
    expect(isIsogram('flamingo')).toBe(true);
    expect(isIsogram('basket')).toBe(true);
    expect(isIsogram('monarchy')).toBe(true);
  });

  it('should return false for a non-isogram word', () => {
    expect(isIsogram('look')).toBe(false);
    expect(isIsogram('Adam')).toBe(false);
    expect(isIsogram('hello')).toBe(false);
  });

  it('should return true for an isogram, case-insensitive', () => {
    expect(isIsogram('LumberJack')).toBe(true);
    expect(isIsogram('Dermatoglyphics')).toBe(true);
  });

  it('should return false for a non-isogram, case-insensitive', () => {
    expect(isIsogram('Alphabet')).toBe(false);
    expect(isIsogram('Mississippi')).toBe(false);
  });
});
