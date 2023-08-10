'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should be (true) if word is (isogram)`, () => {
    expect(isIsogram('isogram'))
      .toBe(true);
  });

  it(`should be (false) if word is (isSogram)`, () => {
    expect(isIsogram('isSogram'))
      .toBe(false);
  });

  it(`should be (true) if word is (empty)`, () => {
    expect(isIsogram(''))
      .toBe(true);
  });
});
