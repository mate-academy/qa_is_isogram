'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should be boolean`, () => {
    expect(typeof isIsogram(''))
      .toBe('boolean');
  });

  it('empty string is isogram', () => {
    expect(isIsogram(''))
      .toBe(true);
  });

  it('Should return true for one character input', () => {
    expect(isIsogram('p'))
      .toBe(true);
  });

  it('String with repeating lowercase characters isn\'t isogram', () => {
    expect(isIsogram('look'))
      .toBe(false);
  });

  it('String isn\'t case-sensitive', () => {
    expect(isIsogram('Adam'))
      .toBe(false);
  });

  it('String with repeating characters isn\'t isogram', () => {
    expect(isIsogram('look'))
      .toBe(false);
  });

  it('String with no-repeating characters is isogram', () => {
    expect(isIsogram('flowers'))
      .toBe(true);
  });

  it('String with cyrillic no-repeating characters is isogram', () => {
    expect(isIsogram('квіти'))
      .toBe(true);
  });
});
