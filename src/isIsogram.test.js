'use strict';

describe(`Function 'isIsogram':`, () => {
  const isIsogram = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return a boolean`, () => {
    expect(typeof isIsogram('')).toBe('boolean');
  });

  it(`should be case sensitive`, () => {
    expect(isIsogram('tEsT')).toBe(false);
  });

  it(`should return 'true' if string is empty`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`should return 'true' if word is isogram`, () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it(`should return 'false' if word is not isogram`, () => {
    expect(isIsogram('Adam')).toBe(false);
  });
});
