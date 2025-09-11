'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  test('returns "true" when every letter of the word is different', () => {
    expect(isIsogram('playgrounds')).toEqual(true);
  });

  test('returns "false" when duplicate letter is found', () => {
    expect(isIsogram('look')).toEqual(false);
  });

  test('returns "false", duplicate letter - case does not affect', () => {
    expect(isIsogram('Adam')).toEqual(false);
  });

  test('returns "true" when empty is passed as an argument', () => {
    expect(isIsogram('')).toEqual(true);
  });

  test('returns "false", duplicate letter - case does not affect', () => {
    expect(isIsogram('Oops')).toEqual(false);
  });
});
