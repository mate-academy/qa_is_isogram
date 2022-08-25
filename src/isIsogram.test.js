'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');
  
  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true when input empty string', () => {
    expect(isIsogram(''))
      .toBeTruthy();
  });

  it('should return true when input isogram', () => {
    expect(isIsogram('Bird'))
      .toBeTruthy();

    expect(isIsogram('Shrek'))
      .toBeTruthy();
  });

  it('should return false when input is not isogram', () => {
    expect(isIsogram('Elephant'))
      .toBeFalsy();

    expect(isIsogram('Farquaad'))
      .toBeFalsy();
  });

  it('should be case insensitive', () => {
    expect(isIsogram('LeOpArD'))
      .toBeTruthy();

    expect(isIsogram('JhoN SnOw'))
      .toBeFalsy();

    expect(isIsogram('IdoitOnPurpOse'))
      .toBeFalsy();
  });
});
