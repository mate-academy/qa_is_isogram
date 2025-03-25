'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return true with lowercase alphabet`, () => {
    expect(isIsogram('abcdefghijklmnopqrstuvwxyz')).toBe(true);
  });

  it(`should return true with uppercase alphabet`, () => {
    expect(isIsogram('ABCDEFGHIJKLMNOPQRSTUVWXYZ')).toBe(true);
  });
  
  it(`should return true with 'Petro' argument`, () => {
    expect(isIsogram('Petro')).toBe(true);
  });

  it(`should return false with 'Mykyta' argument`, () => {
    expect(isIsogram('Mykyta')).toBe(false);
  });

  it(`should return false with 2 same lowercase letters`, () => {
    expect(isIsogram('aa')).toBe(false);
  });

  it(`should return false with 2 same uppercase letters`, () => {
    expect(isIsogram('aa')).toBe(false);
  });

  it(`should return false with same lower/uppercase letters`, () => {
    expect(isIsogram('aA')).toBe(false);
  });

  it(`should return false with 2 spaces`, () => {
    expect(isIsogram('  ')).toBe(false);
  });

  it(`should return true with 1 space`, () => {
    expect(isIsogram(' ')).toBe(true);
  });

  it(`should return false same letters divided by space`, () => {
    expect(isIsogram('f f')).toBe(false);
  });
});
