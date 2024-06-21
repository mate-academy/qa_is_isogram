'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for an empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should return true for "playgrounds"', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it('should return false for "look"', () => {
    expect(isIsogram('look')).toBe(false);
  });

  it('should return false for "Adam"', () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it('should return true for "isogram"', () => {
    expect(isIsogram('isogram')).toBe(true);
  });

  it('should return true for "qa"', () => {
    expect(isIsogram('qa')).toBe(true);
  });

  it('should return true for "may"', () => {
    expect(isIsogram('may')).toBe(true);
  });

  it('should return true for "yura"', () => {
    expect(isIsogram('yura')).toBe(true);
  });

  it('should return false for "yahusta"', () => {
    expect(isIsogram('yahusta')).toBe(false);
  });
});
