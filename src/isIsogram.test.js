'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return true 
    if word is an isogram`, () => {
    expect(isIsogram(''))
      .toBeTruthy();
  });

  it(`should return true 
    if word is empty`, () => {
    expect(isIsogram(''))
      .toBeTruthy();
  });

  it(`should be case-insensitive`, () => {
    expect(isIsogram('Adam'))
      .toBeFalsy();
  });

  it(`should return true 
  if word is not isogram`, () => {
    expect(isIsogram('look'))
      .toBeFalsy();
  });
});
