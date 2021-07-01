'use strict';

describe(`Function 'isIsogram':`, () => {
  const isIsogram = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return a boolean`, () => {
    expect(typeof isIsogram('exam')).toBe('boolean');
  });

  it(`should be case sensitive`, () => {
    expect(isIsogram('APple')).toBe(false);
  });

  // write more tests here

  it(`If isogram is empty shoud return "true"`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`should return "true" if word = "Pen"`, () => {
    expect(isIsogram('Pen')).toBe(true);
  });

  it(`should return "false" if word = "Letter"`, () => {
    expect(isIsogram('Letter')).toBe(false);
  });
});
