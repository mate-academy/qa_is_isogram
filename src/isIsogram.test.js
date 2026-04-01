'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return true if string has no repeating letters, consecutive or non-consecutivebe`, () => {
    const result = isIsogram('playgrounds');
    expect(result).toBe(true);
  });

  it(`should return false if string has repeating letters`, () => {
    const result = isIsogram('look');
    expect(result).toBe(false);
  });

  it(`should return false if string has repeating letters in different case`, () => {
    const result = isIsogram('Adam');
    expect(result).toBe(false);
  });

  it(`should return true if string is empty`, () => {
    const result = isIsogram('');
    expect(result).toBe(true);
  });

  it(`should return false if string has repeating letters at the beginning in different case`, () => {
    const result = isIsogram('Oops');
    expect(result).toBe(false);
  });
});
