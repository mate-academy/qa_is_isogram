'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should throw an error if params are invalid', () => {
    expect(() => isIsogram(-5)).toThrow('Input must be string');
    expect(() => isIsogram(null)).toThrow('Input must be string');
    expect(() => isIsogram(Symbol)).toThrow('Input must be string');
    expect(() => isIsogram([])).toThrow('Input must be string');
    expect(() => isIsogram(undefined)).toThrow('Input must be string');
  });

  it('should return false if word with space', () => {
    expect(isIsogram('pl aygrounds')).toBeFalsy();
  });

  it('should return false value', () => {
    expect(isIsogram('look')).toBeFalsy();
  });

  it('should be case-insensitive ', () => {
    expect(isIsogram('Oops')).toBeFalsy();
    expect(isIsogram('Adam')).toBeFalsy();
  });

  it('should true for empty string ', () => {
    expect(isIsogram('')).toBeTruthy();
    expect(isIsogram('    ')).toBeTruthy();
  });
});
