'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`true for an empty string`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`true for a single letter`, () => {
    expect(isIsogram('a')).toBe(true);
  });

  it(`is case-insensitive`, () => {
    expect(isIsogram('Ccart')).toBe(false);
  });

  it('positive case', () => {
    expect(isIsogram('abcdefghij')).toBe(true);
  });

  it('accepts non-latin letters', () => {
    expect(isIsogram('борна')).toBe(true);
  });

});
