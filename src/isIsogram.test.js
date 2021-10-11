'use strict';

describe(`Function 'isIsogram':`, () => {
  const isIsogram = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return a boolean`, () => {
    expect(typeof isIsogram('iryna')).toBe('boolean');
  });

  it(`should not be case sensitive`, () => {
    expect(isIsogram('Iryna')).toBe(true);
  });

  it(`empty string is isogram`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`should not contains 2 similar letters`, () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it(`cannot contain two identical letters`, () => {
    expect(isIsogram('look')).toBe(false);
  });

  it(`cannot contain two identical letters despite the case`, () => {
    expect(isIsogram('Adam')).toBe(false);
  });
});
