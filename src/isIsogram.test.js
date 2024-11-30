'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('accepts isogram of both registers', () => {
    expect(isIsogram('aqwertYUIOPDFgh')).toBeTruthy();
  });

  it('empty string is an isogram', () => {
    expect(isIsogram('')).toBeTruthy();
  });

  it('counts repeat of small letters ', () => {
    expect(isIsogram('aqweartyuiolkjhg')).toBeFalsy();
  });

  it('counts repeat of capital letters ', () => {
    expect(isIsogram('AQWERTYUIIOKJHG')).toBeFalsy();
  });

  it('counts repeat of different register letters', () => {
    expect(isIsogram('wEtUaryu')).toBeFalsy();
  });
});
