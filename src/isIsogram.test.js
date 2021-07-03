'use strict';

describe(`Function 'isIsogram':`, () => {
  const isIsogram = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return a boolean`, () => {
    expect(typeof isIsogram('frog')).toBe('boolean');
  });

  it(`should be case sensitive`, () => {
    expect(isIsogram('frOg')).toBe(true);
  });

  it(`should no repeating letters`, () => {
    expect(isIsogram('forOg')).toBe(false);
  });

  it(`should has the empty string `, () => {
    expect(isIsogram('')).toBe(true);
  });

  // write more tests here
});
