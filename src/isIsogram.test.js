'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should be true if word is empty`, () => {
    expect(isIsogram('')).toBeTruthy();
  });

  it(`should be true if word contain non-repeating letters`, () => {
    expect(isIsogram('playgrounds')).toBeTruthy();
  });

  it('should return false for "look" (not an isogram)', () => {
    expect(isIsogram('look')).toBeFalsy();
  });

  it('should return false for "Adam" (case-insensitive)', () => {
    expect(isIsogram('Adam')).toBeFalsy();
  });

  it(`should be false
    if word contains repeating letters
      in the same case`, () => {
    expect(isIsogram('adam')).toBeFalsy();
  });
});
