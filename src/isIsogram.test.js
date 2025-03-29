'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });
});

'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require("./isIsogram");

  it('should be declared', () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for an empty string', () => {
    expect(isIsogram("")).toBe(true);
  });

  it('should return true for a single letter string', () => {
    expect(isIsogram("a")).toBe(true);
  });

  it('should return false with duplicate letters', () => {
    expect(isIsogram("aab")).toBe(false);
  });

  it('should return true with all unique letters', () => {
    expect(isIsogram("abcde")).toBe(true);
  });

  it('should return true with mixed case letters', () => {
    expect(isIsogram("Ab")).toBe(true);
  });

  it('should return true with non-alphabetic characters', () => {
    expect(isIsogram("a1b2c3")).toBe(true);
  });

  it('should return false with a repeated non-alphabetic characters', () => {
    expect(isIsogram("a1b2c3a")).toBe(false);
  });

  it('should return false with non-alphabetic characters in mixed case', () => {
    expect(isIsogram("A1b2c3A")).toBe(false);
  });
});
