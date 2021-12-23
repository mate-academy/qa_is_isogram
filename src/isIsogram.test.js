'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    expect(typeof isIsogram('')).toBe('boolean');
  });

  it(`should not be case-sensitive`, () => {
    expect(isIsogram('Ttake')).toBeFalsy();
  });

  it(`should return true if input is '' `, () => {
    expect(isIsogram('')).toBeTruthy();
  });

  it(`should return true if input is 'playgrounds' `, () => {
    expect(isIsogram('playgrounds')).toBeTruthy();
  });

  it(`should return false if input is 'look' `, () => {
    expect(isIsogram('look')).toBeFalsy();
  });
});
