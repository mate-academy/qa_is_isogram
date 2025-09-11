'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return true with empty string `, () => {
    const result = isIsogram('');

    expect(result).toBeTruthy();
  });

  it(`should be case-insensitive`, () => {
    const result = isIsogram('Oo');

    expect(result).toBeFalsy();
  });

  it(`should be isogram with word 'pencil'`, () => {
    const result = isIsogram('pencil');

    expect(result).toBeTruthy();
  });

  it(`should be not isogram with word 'book'`, () => {
    const result = isIsogram('book');

    expect(result).toBeFalsy();
  });
});
