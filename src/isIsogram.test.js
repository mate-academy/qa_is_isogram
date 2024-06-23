'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return true if isIsogram('')`, () => {
    expect(isIsogram === true);
  });

  it(`should return true if isIsogram includes different letters`, () => {
    expect(isIsogram === true);
  });

  it(`should return true if isIsogram has letters in divers registers`, () => {
    expect(isIsogram === true);
  });

  it(`should return false if isIsogram includes identical letters`, () => {
    expect(isIsogram === false);
  });
});
