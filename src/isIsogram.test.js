'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  test('The function should return true if (``)', () => {
    expect(isIsogram('')).toBe(true);
  });

  test('The function should return true if (`playgrounds`)', () => {
    expect(isIsogram(`playgrounds`)).toBe(true);
  });

  test('The function should return false if (`look`)', () => {
    expect(isIsogram('look')).toBe(false);
  });

  test('The function should return false if (`Adam`)', () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  test('The function should return true if (`Them`)', () => {
    expect(isIsogram('Them')).toBe(true);
  });
});
