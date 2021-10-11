'use strict';

describe(`Function 'isIsogram':`, () => {
  const isIsogram = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return a boolean`, () => {
    expect(typeof isIsogram('text')).toBe('boolean');
  });

  it(`should return 'false' if the string contains 
  the same characters with different cases`, () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it(`should return 'true' when input value ' '`, () => {
    expect(isIsogram(' ')).toBe(true);
  });

  it(`should return 'false' if the same characters aren't 
  next to each other`, () => {
    expect(isIsogram('adam')).toBe(false);
  });

  it(`should return 'false' if the same characters are 
  next to each other`, () => {
    expect(isIsogram('look')).toBe(false);
  });

  it(`should return 'false' when input is 'AaBbCc'`, () => {
    expect(isIsogram('AaBbCc')).toBe(false);
  });

  it(`should return 'true' when input is 'AbC'`, () => {
    expect(isIsogram('AbC')).toBe(true);
  });
});
