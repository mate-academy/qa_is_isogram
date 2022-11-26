'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  test(`should return 'true' if input is empty`, () => {
    expect(isIsogram('')).toBeTruthy();
  });

  test(`should return 'true' if input has no duplicate letters`, () => {
    expect(isIsogram('cat')).toBeTruthy();
  });

  test(`should return 'true' if input has 2 words and no 
  duplicates letters`, () => {
    expect(isIsogram('hi, cat')).toBeTruthy();
  });

  test(`should return 'false' if input has duplicates letters`, () => {
    expect(isIsogram('coca')).toBeFalsy();
  });

  test(`should return 'false' if input has duplicates letters of 
  different case`, () => {
    expect(isIsogram('Bob')).toBeFalsy();
  });

  test(`should return 'false' if input has more than one space`, () => {
    expect(isIsogram('You like cats')).toBeFalsy();
  });

  test(`should return 'false' if input has more than one special 
  character`, () => {
    expect(isIsogram('hi, cat,')).toBeFalsy();
  });
});
