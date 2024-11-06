'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');
  const stringExample = NaN;

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return 'false' if 'word' is not a string`, () => {
    const result = isIsogram(stringExample);

    if (typeof (stringExample) !== 'string' && stringExample !== '') {
      expect(result).toBe(false);
    }
  });

  it('should ignore case-insensitive', () => {
    const result = isIsogram('Aabc');

    expect(result).toBe(false);
  });

  it(`should return 'false' if 'word' contains non-letters`, () => {
    const result = isIsogram(stringExample);

    if (typeof (stringExample) === 'string') {
      const arrayFromString = Array.from(stringExample);

      expect(result).toBe(arrayFromString.every((value) => {
        const lettersString = 'qwertyuiopasdfghjklzxcvbnm1';

        lettersString.includes(value.toLowerCase());
      }));
    };
  });

  it(`should return "true" if the string "word" is ('')`, () => {
    const result = isIsogram('');

    expect(result).toBe(true);
  });

  it('should return "false" if the string "word" is not an isogram', () => {
    const result = isIsogram('AbcD');

    expect(result).toBe(true);
  });
});
