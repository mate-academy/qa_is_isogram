'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return false' when input value is empty`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`should return 'true' when input value is 'playgrounds'`, () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it(`should return 'false' when input value is 'look'`, () => {
    expect(isIsogram('look')).toBe(false);
  });

  it(`should return 'false' when input value is 'Adam'`, () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it(`should return 'true' when input value is 'Ukraine'`, () => {
    expect(isIsogram('Ukraine')).toBe(true);
  });
});
