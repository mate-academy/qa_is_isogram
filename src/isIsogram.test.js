'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`isIsogram('playgrounds') should return 'true'`, () => {
    expect(isIsogram('playgrounds'))
      .toBe(true);
  });

  it(`isIsogram('look') should return 'false'`, () => {
    expect(isIsogram('look'))
      .toBe(false);
  });

  it(`isIsogram('Adam') should return 'false'`, () => {
    expect(isIsogram('Adam'))
      .toBe(false);
  });

  it(`isIsogram('') should return 'true'`, () => {
    expect(isIsogram(''))
      .toBe(true);
  });

  it(`isIsogram('banana') should return 'false'`, () => {
    expect(isIsogram('banana'))
      .toBe(false);
  });

  it(`isIsogram('Daddy') should return 'false'`, () => {
    expect(isIsogram('Daddy'))
      .toBe(false);
  });

  it(`isIsogram('qwertyuiopasdfghjklzxcvbnm') should return 'true'`, () => {
    expect(isIsogram('qwertyuiopasdfghjklzxcvbnm'))
      .toBe(true);
  });

  it(`isIsogram('cooperation') should return 'false'`, () => {
    expect(isIsogram('cooperation'))
      .toBe(false);
  });

  it(`isIsogram function should return a boolean value`, () => {
    expect(typeof isIsogram('abc')).toBe('boolean');
  });
});
