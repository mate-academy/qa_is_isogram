'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  test(`should be an isogram`, () => {
    expect(isIsogram(' ')).toBe(true);
  });

  test(`should be an isogram`, () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  test(`should be an isogram`, () => {
    expect(isIsogram('look')).toBe(false);
  });

  test(`should be an isogram`, () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  test(`should be an isogram`, () => {
    expect(isIsogram('Ll')).toBe(false);
  });

});
