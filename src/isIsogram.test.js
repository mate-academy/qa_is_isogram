'use strict';

const { isIsogram } = require('./isIsogram');

describe('isIsogram', () => {
  it('should be declared', () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  test('should return true for "playgrounds"', () => {
    expect(isIsogram('playgrounds')).toEqual(true);
  });

  test('should return false for "look"', () => {
    expect(isIsogram('look')).toEqual(false);
  });

  test('should return false for "Adam"', () => {
    expect(isIsogram('Adam')).toEqual(false);
  });

  test('should return true for an empty string', () => {
    expect(isIsogram('')).toEqual(true);
  });

  test('should return false for "Oops"', () => {
    expect(isIsogram('Oops')).toEqual(false);
  });

  test('should return true for "abc"', () => {
    expect(isIsogram('abc')).toEqual(true);
  });

  test('should return true for "AAB"', () => {
    expect(isIsogram('AAB')).toEqual(false);
  });

  test('should return true for "Aba"', () => {
    expect(isIsogram('Aba')).toEqual(false);
  });
});
