'use strict';

describe(`Function 'isIsogram':`, () => {
  const isIsogram = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return a boolean`, () => {
    expect(typeof isIsogram('word')).toBe('boolean');
  });

  it(`should be case sensitive`, () => {
    expect(isIsogram('Sister')).toBe(false);
  });

  it(`should return true if  a word has no repeating letters, 
  consecutive or non-consecutive`, () => {
    expect(isIsogram('Hi')).toBe(true);
  });

  it(`should return true if string is empty`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`should return false if word has repeating letters, 
  consecutive or non-consecutive.`, () => {
    expect(isIsogram('Hello')).toBe(false);
  });
});
