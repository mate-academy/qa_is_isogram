'use strict';

describe(`Function 'isIsogram':`, () => {
  const isIsogram = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return a boolean`, () => {
    expect(typeof isIsogram('')).toBe('boolean');
  });

  it(`should not be case sensitive`, () => {
    expect(isIsogram('DOGE')).toBe(true);
  });

  it(`should have unique letters `, () => {
    expect(isIsogram('good')).toBe(false);
  });

  it(`should return 'true' for one-lenght character`, () => {
    expect(isIsogram('a')).toBe(true);
  });

  it(`should have no spaces'`, () => {
    expect(isIsogram('super man')).toBe(true);
  });

  it(`empty stirng should be returned as 'true'`, () => {
    expect(isIsogram('')).toBe(true);
  });
});
