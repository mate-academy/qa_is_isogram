'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`return true for empty string`, () => {
    const result = isIsogram('');

    expect(result).toBe(true);
  });

  it(`return true for valid isogram with only lower-case letters`, () => {
    const result = isIsogram('playgrounds');

    expect(result).toBe(true);
  });

  it(`return true for valid isogram with mixed cases letters`, () => {
    const result = isIsogram('Bus');

    expect(result).toBe(true);
  });

  it(`return false for invalid isogram with only lower-case letters`, () => {
    const result = isIsogram('hello');

    expect(result).toBe(false);
  });

  it(`return false for invalid isogram with mixed cases letters`, () => {
    const result = isIsogram('Adam');

    expect(result).toBe(false);
  });
});
