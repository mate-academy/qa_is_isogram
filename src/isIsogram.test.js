'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return a boolean value`, () => {
    expect(typeof isIsogram('hello')).toBe('boolean');
  });

  it(`should return true for word = ''`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`should return true for 'terminal'`, () => {
    expect(isIsogram('terminal')).toBe(true);
  });

  it(`should return true for 'STRING'`, () => {
    expect(isIsogram('STRING')).toBe(true);
  });

  it(`should return true for 'Quality'`, () => {
    expect(isIsogram('Quality')).toBe(true);
  });

  it(`should return false for 'letter'`, () => {
    expect(isIsogram('letter')).toBe(false);
  });

  it(`should return false for 'SELECTION'`, () => {
    expect(isIsogram('SELECTION')).toBe(false);
  });

  it(`should return false for 'Window'`, () => {
    expect(isIsogram('Window')).toBe(false);
  });
});
