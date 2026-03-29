'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true if input is empty string', () => {
    expect(isIsogram(''))
      .toEqual(true);
  });

  it('should return true if word is isogram', () => {
    expect(isIsogram('github'))
      .toEqual(true);
  });

  it('should return false if word isn\'t isogram', () => {
    expect(isIsogram('javascript'))
      .toEqual(false);
  });

  it('should ignore uppercase', () => {
    expect(isIsogram('javAscript'))
      .toEqual(false);
  });

  it('should ignore lowercase', () => {
    expect(isIsogram('JAVaSCRIPT'))
      .toEqual(false);
  });
});
