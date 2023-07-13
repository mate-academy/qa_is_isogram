'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should be case-insensitive', () => {
    expect(isIsogram('isisOGraM')).toBe(false);
  });

  it('Word without duplicated character', () => {
    expect(isIsogram('twelve')).toBe(false);
  });

  it('Word with duplicated character in mixed case', () => {
    expect(isIsogram('Alphabet')).toBe(false);
  });
});
