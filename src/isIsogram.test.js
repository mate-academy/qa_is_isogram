'use strict';

describe(`Function 'isIsogram':`, () => {
  const isIsogram = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return a boolean`, () => {
    expect(typeof isIsogram('example')).toBe('boolean');
  });

  it(`should be case sensitive`, () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it(`should return true if string is empty`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`should return true if string = 'playgrounds'`, () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it(`sould return false if string = 'look'`, () => {
    expect(isIsogram('look')).toBe(false);
  });
});
