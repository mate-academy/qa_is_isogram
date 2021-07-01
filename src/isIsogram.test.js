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
    expect(isIsogram('WORD')).toBe(true);
  });

  it(`should be case sensitive`, () => {
    expect(isIsogram('word')).toBe(true);
  });

  it(`should return 'true' if string is an isogram`, () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it(`should return 'true' if string is blank`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`should return 'false' if has repetitive consecutive characters`, () => {
    expect(isIsogram('look')).toBe(false);
  });

  it(`return 'false' if has repetitive  inconsecutive characters`, () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it(`should treat Cyrillic characters as invalid`, () => {
    expect(isIsogram('задача')).toBe(false);
  });
});
