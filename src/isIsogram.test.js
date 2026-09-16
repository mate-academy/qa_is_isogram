'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`accepts unique letters`, () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it(`rejects repeated consecutive letters`, () => {
    expect(isIsogram('look')).toBe(false);
  });

  it(`rejects duplicate letters regardless of case`, () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it(`accepts empty string`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`accepts empty string`, () => {
    expect(isIsogram('Oops')).toBe(false);
  });
});
