'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true if all letters are different', () => {
    expect(isIsogram('clok')).toEqual(true);
  });

  it('should return true if string is empty', () => {
    expect(isIsogram('')).toEqual(true);
  });

  it('should return false if some letters are repeated', () => {
    expect(isIsogram('sleep')).toEqual(false);
  });

  it(`shouldn't be case-sensitive`, () => {
    expect(isIsogram('America')).toEqual(false);
  });
});
