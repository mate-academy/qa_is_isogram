'use strict';

describe(`Function 'isIsogram':`, () => {
  const isIsogram = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return a boolean`, () => {
    expect(typeof isIsogram('abc')).toBe('boolean');

  });

  it(`should be case sensitive`, () => {
    expect(isIsogram('Adam')).toBe(false);

  });

  it(`should return true if word contains one letter`, () => {
    expect(isIsogram('J')).toBe(true);
  });

  it(`should return false if word contains repeated letters`, () => {
    expect(isIsogram('Apple')).toBe(false);
  });

  it(`should return true if word contains unique letters`, () => {
    expect(isIsogram('Crazy')).toBe(true);
  });
  
});
