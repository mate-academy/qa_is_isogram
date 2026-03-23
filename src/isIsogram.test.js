'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return true if string empty`, () => {
    const result = isIsogram('');

    expect(result).toBeTruthy();
  });

   it(`should return true if word has no repeating letters `, () => {
    const result = isIsogram('playgrounds');

    expect(result).toBeTruthy();
  });

  it(`should return false if word has repeating letters`, () => {
    const result = isIsogram('look');

    expect(result).toBeFalsy();
  });

  it(`returns false for non-adjacent duplicates ignoring case`, () => {
    const result = isIsogram('Adam');

    expect(result).toBeFalsy();
  });

  it(`returns false for adjacent duplicates ignoring case`, () => {
    const result = isIsogram('Oops');

    expect(result).toBeFalsy();
  });
});
