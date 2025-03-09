'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`the empty string is an isogram`, () => {
    expect(isIsogram(''))
      .toBe(true);
  });

  it(`should be case-insensitive`, () => {
    expect(isIsogram('Mom'))
      .toBe(false);
  });

  it(`should be isogram for 'aktior'`, () => {
    expect(isIsogram('aktior'))
      .toBe(true);
  });

  it(`should not be isogram for 'aktiora'`, () => {
    expect(isIsogram('aktiora'))
      .toBe(false);
  });

  it(`should not be isogram for 'aakt'`, () => {
    expect(isIsogram('aakt'))
      .toBe(false);
  });

  it(`should not be isogram for 'aktt'`, () => {
    expect(isIsogram('aktt'))
      .toBe(false);
  });

  it(`should not be isogram for 'akkt'`, () => {
    expect(isIsogram('akkt'))
      .toBe(false);
  });
});
