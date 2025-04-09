'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it('should be declared', () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for an isogram', () => {
    expect(isIsogram('playgrounds')).toBe(true);
    expect(isIsogram('Dermatoglyphics')).toBe(true);
    expect(isIsogram('background')).toBe(true);
    expect(isIsogram('')).toBe(true); // порожній рядок — теж ізограма
  });

  it('should return false for a non-isogram', () => {
    expect(isIsogram('look')).toBe(false); // повторення "o"
    expect(isIsogram('Adam')).toBe(false); // "a" і "A" = одна літера
    expect(isIsogram('moose')).toBe(false);
    expect(isIsogram('aba')).toBe(false);
  });

  it('should be case-insensitive', () => {
    expect(isIsogram('AbCdefGh')).toBe(true);
    expect(isIsogram('NoNo')).toBe(false);
  });
});
