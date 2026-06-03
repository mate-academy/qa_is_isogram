'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`returns true if all letters are different`, () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it(`returns false if string contains duplicate letters`, () => {
    expect(isIsogram('look')).toBe(false);
  });

  it(`returns false if there are duplicate letters in different case`, () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it(`returns false if string contains consecutive duplicate letters`, () => {
    expect(isIsogram('Oops')).toBe(false);
  });

  it(`returns true if the string is empty`, () => {
    expect(isIsogram('')).toBe(true);
  });
});
