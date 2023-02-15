'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`Should be false when input is 'Lol'`, () => {
    expect(isIsogram('lol')).toBe(false);
  });

  it(`Should be true when input is empty string`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`Should be true when input is 'master'`, () => {
    expect(isIsogram('master')).toBe(true);
  });

  it(`Should be true when input is 'MasTEr'`, () => {
    expect(isIsogram('MasTEr')).toBe(true);
  });

  it(`Should be true when input is 'master'`, () => {
    expect(isIsogram('master')).toBe(true);
  });

  it(`Should be true when input is different numbers`, () => {
    expect(isIsogram('12345')).toBe(true);
  });

  it(`Should be false when input is the same numbers`, () => {
    expect(isIsogram('1144')).toBe(false);
  });

  it(`Should be true when input is different special symbols`, () => {
    expect(isIsogram('!@#$%')).toBe(true);
  });

  it(`Should be false when input is the same special symbols`, () => {
    expect(isIsogram('!!!!!')).toBe(false);
  });
});
