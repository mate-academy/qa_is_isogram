'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  test('is true if isogram shows name', () => {
    expect(isIsogram('Adam')).toBeFalsy();
  });

  test('is empty line', () => {
    expect(isIsogram(' ')).toBeTruthy();
  });

  test('is true for non-repeating letters', () => {
    expect(isIsogram('playgrounds')).toBeTruthy();
  });

  test('is false for repeating letters', () => {
    expect(isIsogram('look')).toBeFalsy();
  });

  test('is false for repeating case-insensitive letters', () => {
    expect(isIsogram('Adam')).toBeFalsy();
  });
});
