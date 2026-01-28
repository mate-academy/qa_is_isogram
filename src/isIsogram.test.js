'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  const isIsogramMap = {
    playgrounds: true,
    look: false,
    Adam: false,
    '': true,
    Oops: false,
  };

  for (const key in isIsogramMap) {
    it(`should ${isIsogramMap[key]} if ${key} passed`, () => {
      expect(isIsogram(key)).toBe(isIsogramMap[key]);
    });
  }
});
