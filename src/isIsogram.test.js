'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should be returned true if entered an empty string`, () => {
    expect(isIsogram(''))
      .toBe(true);
  });

  it(`should be returned true if entered a string without 
    repeatings in uppercase`, () => {
    expect(isIsogram('MATE'))
      .toBe(true);
  });

  it(`should be returned true if entered a string without 
    repeatings in lowercase`, () => {
    expect(isIsogram('qamentor'))
      .toBe(true);
  });

  it(`should be returned false if entered string with 
    repeating letters in lowercase`, () => {
    expect(isIsogram('isolation'))
      .toBe(false);
  });

  it(`should be returned false if entered string with
    repeating letters in upper and lower cases`, () => {
    expect(isIsogram('Obviously'))
      .toBe(false);
  });

  it(`should be returned false if entered a string with repeating 
    letters in lowercase'`, () => {
    expect(isIsogram('abdominal'))
      .toBe(false);
  });
});
