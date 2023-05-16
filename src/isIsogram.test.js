'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return false if 'word' has 1 repeating letter`, () => {
    const actual = isIsogram('dad');
    const expected = false;

    expect(actual).toBe(expected);
  });

  it(`should return true if 'word' has no repeating letters`, () => {
    const actual = isIsogram('mate');
    const expected = true;

    expect(actual).toBe(expected);
  });

  it(`should return false if 'word' has 3 repeating letter`, () => {
    const actual = isIsogram('Innkeepers');
    const expected = false;

    expect(actual).toBe(expected);
  });

  it(`should return true if 'word' is empty string`, () => {
    const actual = isIsogram('');
    const expected = true;

    expect(actual).toBe(expected);
  });

  it(`should return false if 'word' has 1 upper case repeating letter`, () => {
    const actual = isIsogram('Lol');
    const expected = false;

    expect(actual).toBe(expected);
  });
});
