'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return a boolean type`, () => {
    expect(typeof isIsogram('sport')).toBe('boolean');
  });

  it(`should return a true when input is empty.`, () => {
    expect(isIsogram('')).toBeTruthy();
  });

  it(`should return a true when word.length === 1`, () => {
    expect(isIsogram('A')).toBeTruthy();
  });

  it(`should not be case sensitive`, () => {
    expect(isIsogram('Abba')).toBeFalsy();
  });

  it(`should return false when input is 'aA'`, () => {
    expect(isIsogram('aA')).toBe(false);
  });

  it(`should return true when input is 'isogram'`, () => {
    expect(isIsogram('isogram')).toBe(true);
  });

  it(`should return false when input is 'my isogram'`, () => {
    expect(isIsogram('my isogram')).toBe(false);
  });

  it(`should return true when input is'unpredictably'`, () => {
    expect(isIsogram('unpredictably')).toBe(true);
  });

  it(`should return false when input is 'unprEdictable'`, () => {
    expect(isIsogram('unprEdictable')).toBe(false);
  });
});
