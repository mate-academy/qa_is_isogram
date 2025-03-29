'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  test(`is the word 'playgrounds' isogram?`, () => {
    const word = 'playgrounds';
    const result = isIsogram(word);

    expect(result).toBe(true);
  });

  test(`is the word 'look' isogram?`, () => {
    const word = 'look';
    const result = isIsogram(word);

    expect(result).toBe(false);
  });

  test(`is the word 'Adam' isogram?`, () => {
    const word = 'Adam';
    const result = isIsogram(word);

    expect(result).toBe(false);
  });

  test(`is the word '' isogram?`, () => {
    const word = '';
    const result = isIsogram(word);

    expect(result).toBe(true);
  });
});
