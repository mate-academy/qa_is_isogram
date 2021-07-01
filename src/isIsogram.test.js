'use strict';

describe(`Function 'isIsogram':`, () => {
  const isIsogram = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return a boolean`, () => {
    expect(typeof isIsogram('x'))
      .toBe('boolean');
  });

  it(`should not be case sensitive`, () => {
    expect(isIsogram(`AaBbCc`))
      .toBe(false);
  });

  it(`should return 'true' value if input is ' '`, () => {
    expect(isIsogram(' '))
      .toBe(true);
  });

  it(`should return 'false' if the same characters aren't 
  next to each other`, () => {
    expect(isIsogram('vasiliy'))
      .toBe(false);
  });

  it(`should return 'false' if the same characters are 
  next to each other`, () => {
    expect(isIsogram('vassiliy'))
      .toBe(false);
  });
});
