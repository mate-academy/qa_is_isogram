'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should be return boolean`, () => {
    const result = typeof isIsogram('word');

    expect(result).toBe('boolean');
  });

  it(`Should return "true" if input word has no repeating letters`, () => {
    const result = isIsogram('playgrounds');

    expect(result).toBe(true);
  });

  it(`Should return "false" if a word has repetitive letters`, () => {
    const result = isIsogram('look');

    expect(result).toBe(false);
  });

  it(`returns "false" for word with duplicated letters (including capital)`,
    () => {
      expect(isIsogram('Adam')).toBe(false);
    });

  it(`Should return "true" if input data is empty string`, () => {
    const result = isIsogram('');
    expect(result).toBe(true);
  });

  it(`Should return "false" if a word has repetitive letters `, () => {
    const result = isIsogram('look');

    expect(result).toBe(false);
  });
});
