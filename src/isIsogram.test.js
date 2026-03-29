'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`If a string contains different letters,
    it should return as an isogram.`, () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it(`If a string contains the same letter in both uppercase and lowercase,
     it is not an isogram.`, () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it(`If a string has two identical letters, it is not an isogram.`, () => {
    expect(isIsogram('look')).toBe(false);
  });

  it(`An empty string should return an isogram.`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`If a string contains two identical letters,
    one uppercase and one lowercase, next to each other,
    it is not an isogram.`, () => {
    expect(isIsogram('Oops')).toBe(false);
  });

//   isIsogram('playgrounds') === true
// isIsogram('look') === false
// isIsogram('Adam') === false
// isIsogram('') === true
// isIsogram('Oops') === false
});
