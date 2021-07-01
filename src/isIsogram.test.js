'use strict';

describe(`Function 'isIsogram':`, () => {
  const isIsogram = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return a boolean`, () => {
    const checkBoolean = isIsogram('');

    expect(typeof checkBoolean === 'boolean').toBeTruthy();
  });

  it(`should not be case sensitive`, () => {
    expect(isIsogram('MmNn')).toBeFalsy();
  });

  it(`should return 'true' if word = '123'`, () => {
    expect(isIsogram('123')).toBeTruthy();
  });

  it(`should return 'false' if numbers are not 
  unique: word = '333'`, () => {
    expect(isIsogram('333')).toBeFalsy();
  });

  it(`should return 'true' if word = ''`, () => {
    expect(isIsogram('')).toBeTruthy();
  });

  it(`should return 'false' if letters 
  are no unique: word = 'look'`, () => {
    expect(isIsogram('look')).toBeFalsy();
  });
});
