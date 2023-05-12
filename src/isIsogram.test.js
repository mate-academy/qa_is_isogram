'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`'word' has 1 repeating letter`, () => {
    const actual = isIsogram('dad');
    const expected = false;

    expect(actual).toBe(expected);
  });

  it(`'word' has no repeating letters`, () => {
    const actual = isIsogram('mate');
    const expected = true;

    expect(actual).toBe(expected);
  });

  it(`'word' has 3 repeating letter`, () => {
    const actual = isIsogram('Innkeepers');
    const expected = false;

    expect(actual).toBe(expected);
  });

  it(`'word' is empty string`, () => {
    const actual = isIsogram('');
    const expected = true;

    expect(actual).toBe(expected);
  });

  it(`'word' has 1 upper case repeating letter`, () => {
    const actual = isIsogram('Lol');
    const expected = false;

    expect(actual).toBe(expected);
  });
});
