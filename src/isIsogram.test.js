'use strict';

describe(`Function 'isIsogram':`, () => {
  const isIsogram = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return a boolean`, () => {
    expect(typeof isIsogram('text')).toBe('boolean');
  });

  it(`should not be case sensitive 
  (M and m are considered the same letter)`, () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it(`should return 'true' when input value ' '`, () => {
    expect(isIsogram(' ')).toBe(true);
  });

  it(`should return 'false' if the same characters aren't 
  next to each other`, () => {
    expect(isIsogram('adam')).toBe(false);
  });

  it(`should return 'false' if the same characters are 
  next to each other`, () => {
    expect(isIsogram('look')).toBe(false);
  });
});
