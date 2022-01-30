'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return a boolean type`, () => {
    expect(typeof isIsogram('sport')).toBe('boolean');
  });

  it(`should return a true if word === ''`, () => {
    expect(isIsogram('')).toBeTruthy();
  });

  it(`should return a true if word.length === 1`, () => {
    expect(isIsogram('A')).toBeTruthy();
  });

  it(`should not be case sensitive`, () => {
    expect(isIsogram('Abba')).toBeFalsy();
  });

  it(`should return false if word === 'aA'`, () => {
    expect(isIsogram('aA')).toBe(false);
  });

  it(`should return true if word === 'isogram'`, () => {
    expect(isIsogram('isogram')).toBe(true);
  });

  it(`should return false if word === 'my isogram'`, () => {
    expect(isIsogram('my isogram')).toBe(false);
  });

  it(`should return true if word === 'unpredictably'`, () => {
    expect(isIsogram('unpredictably')).toBe(true);
  });

  it(`should return false if word === 'unprEdictable'`, () => {
    expect(isIsogram('unprEdictable')).toBe(false);
  });
});
