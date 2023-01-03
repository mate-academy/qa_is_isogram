'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  describe('true', () => {
    it(`word with no repeating letters`, () => {
      const result = isIsogram('playgrounds');

      expect(result).toBe(true);
    });

    it(`empty string`, () => {
      const result = isIsogram('');

      expect(result).toBe(true);
    });
  });

  describe('false', () => {
    it(`word with repeating letters`, () => {
      const result = isIsogram('look');

      expect(result).toBe(false);
    });

    it(`word with repeating letters but different case`, () => {
      const result = isIsogram('Adam');

      expect(result).toBe(false);
    });
  });
});
