'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  describe('should be isogram', () => {
    it('should return true for an empty string', () => {
      expect(isIsogram('')).toBe(true);
    });

    it('should return true for a one-letter word', () => {
      expect(isIsogram('a')).toBe(true);
    });

    it(`should return true for a word with distinct letters`, () => {
      expect(isIsogram('playgrounds')).toBe(true);
    });

    it(
      `should return true` +
        ` for a word with distinct letters in different cases`,
      () => {
        expect(isIsogram('AbCd')).toBe(true);
      },
    );
  });

  describe('should not be an isogram', () => {
    it('should return false when two identical letters are consecutive', () => {
      expect(isIsogram('aa')).toBe(false);
    });

    it(
      `should return false` + ` when a letter is repeated non-consecutively`,
      () => {
        expect(isIsogram('aba')).toBe(false);
      },
    );

    it(
      `should return false` + ` when a letter is repeated non-consecutively`,
      () => {
        expect(isIsogram('look')).toBe(false);
      },
    );

    it(
      `should return false` + ` when the first and last letters are identical`,
      () => {
        expect(isIsogram('abca')).toBe(false);
      },
    );

    it(
      `should return false` +
        ` when the same letter appears in different cases`,
      () => {
        expect(isIsogram('aA')).toBe(false);
      },
    );

    it(
      `should return false` +
        ` when the same letter appears in different cases`,
      () => {
        expect(isIsogram('Adam')).toBe(false);
      },
    );

    it(
      `should return false` +
        ` when the same letter appears non-consecutively in different cases`,
      () => {
        expect(isIsogram('abcA')).toBe(false);
      },
    );

    it(
      `should return false` +
        ` when the same letter appears non-consecutively in different cases`,
      () => {
        expect(isIsogram('Oops')).toBe(false);
      },
    );
  });
});
