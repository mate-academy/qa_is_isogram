'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return fasel for 'hello '`, () => {
    const result = isIsogram('hello');

    expect(result).toBe(false);
  });

  it(`should return fasel for 'moOse'`, () => {
    const result = isIsogram('moOse');

    expect(result).toBe(false);
  });

  it(`should return true for empty string`, () => {
    const result = isIsogram('');

    expect(result).toBe(true);
  });

  it(`should return true for 'background'`, () => {
    const result = isIsogram('background');

    expect(result).toBe(true);
  });

  it(`should return true for 'subdermatoglyphic'`, () => {
    const result = isIsogram('subdermatoglyphic');

    expect(result).toBe(true);
  });
});
