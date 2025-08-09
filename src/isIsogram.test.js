'use strict';

describe(`'isIsogram' function`, () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`'true' for a word with all unique letters`, () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it(`'true' for empty string`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`'false' for a word with repeated letters next to each other`, () => {
    expect(isIsogram('look')).toBe(false);
  });

  it(`'false' for a word with repeated letters ignoring case`, () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it(`'false' for a word with repeated letters
    non-consecutively ignoring case`, () => {
    expect(isIsogram('Oops')).toBe(false);
  });
});
