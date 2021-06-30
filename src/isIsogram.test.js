'use strict';

describe(`Function 'isIsogram':`, () => {
  const isIsogram = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return a boolean`, () => {
    expect(typeof isIsogram('1')).toBe('boolean');
  });

  it(`should be case sensitive`, () => {
    expect(isIsogram('Dad')).toBe(false);
  });

  it(`should return 'true' value if input is ''`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`should return 'false' if the same characters aren't 
  next to each other`, () => {
    expect(isIsogram('academy')).toBe(false);
  });

  it(`should return 'false' if the same characters are 
  next to each other`,
  () => {
    expect(isIsogram('pretty')).toBe(false);
  });
});
