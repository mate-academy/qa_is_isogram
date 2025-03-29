'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return 'true' for empty string `, () => {
    const result = isIsogram('');

    expect(result).toBe(true);
  });

  it(`should return "true"
  for a string with letters without repetitions `, () => {
    const result = isIsogram('playgrounds');

    expect(result).toBe(true);
  });

  it(`should return "false"
  for a string with repeated lowercase letters `, () => {
    const result = isIsogram('look');

    expect(result).toBe(false);
  });

  it(`should return "false"
  for a string with repeated lowercase and uppercase letters `, () => {
    const result = isIsogram('Adam');

    expect(result).toBe(false);
  });
});
