'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true if all letters are uniq', () => {
    expect(isIsogram('playgrounds'))
      .toEqual(true);
  });

  it('should return false if letters are not uniq', () => {
    expect(isIsogram('playgroundsp'))
      .toEqual(false);
  });

  it('should return false if exist same letters in diff cases', () => {
    expect(isIsogram('Apart'))
      .toEqual(false);
  });

  it(`should return true if word = ''`, () => {
    expect(isIsogram(''))
      .toEqual(true);
  });
});
