'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`arg - word with without repetition of letters`, () => {
    expect(isIsogram('hey')).toBe(true);
  });

  it(`arg - word with repetition of letters`, () => {
    expect(isIsogram('Hello')).toBe(false);
    expect(isIsogram('sOon')).toBe(false);
  });

  it(`arg - space`, () => {
    expect(isIsogram(' ')).toBe(true);
  });

  it(`should handle error when input is empty or not valid)`, () => {
    expect(() => isIsogram()).toThrow();
    expect(() => isIsogram(4)).toThrow();
    expect(() => isIsogram(NaN)).toThrow();
  });
});
