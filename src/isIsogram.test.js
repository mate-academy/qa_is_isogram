'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should treat empty string as isogram`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`should treat Upper and Lower case as equal`, () => {
    expect(isIsogram('Mom')).toBe(false);
  });

  it(`should return true on isograms`, () => {
    expect(isIsogram('colman')).toBe(true);
  });

  it(`should return false for non isograms`, () => {
    expect(isIsogram('Conan')).toBe(false);
    expect(isIsogram('boo')).toBe(false);
    expect(isIsogram('ffan')).toBe(false);
  });
});
