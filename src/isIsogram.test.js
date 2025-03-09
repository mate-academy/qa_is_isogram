'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`abcd: non repeated lower case letters`, () => {
    expect(isIsogram('abcd')).toBe(true);
  });

  it(`abcdAC: upper case duplicated  by lower case`, () => {
    expect(isIsogram('abcdAC')).toBe(false);
  });

  it(`empty string`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`ABCD: non repeated upper case letters`, () => {
    expect(isIsogram('ABCD')).toBe(true);
  });

  it(`abcdb: one lower case letter duplicated`, () => {
    expect(isIsogram('abcdb')).toBe(false);
  });

  it(`ABCDA: one upper case letter duplicated`, () => {
    expect(isIsogram('ABCDA')).toBe(false);
  });
});
