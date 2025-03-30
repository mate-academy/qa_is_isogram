'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`Function should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('If input word is playgrounds must return true', () => {
    expect(isIsogram('playgrounds')).toBeTruthy();
  });

  it(' Empty string must return true', () => {
    expect(isIsogram('')).toBeTruthy();
  });

  it('If input word is look ', () => {
    expect(isIsogram('look')).toBeFalsy();
  });

  it('If input word is Adam must return false ', () => {
    expect(isIsogram('Adam')).toBeFalsy();
  });

  it('different languages CС must return true', () => {
    expect(isIsogram('CС')).toBeTruthy();
  });

  it('One letter must return true', () => {
    expect(isIsogram('K')).toBeTruthy();
  });

  it('Special symbols must return true', () => {
    expect(isIsogram('@_-')).toBeTruthy();
  });

  it('Different numbers must return true', () => {
    expect(isIsogram('12345')).toBeTruthy();
  });

  it('Same numbers must return false', () => {
    expect(isIsogram('55')).toBeFalsy();
  });

  it('Same symbols must return false', () => {
    expect(isIsogram('@@')).toBeFalsy();
  });
});
