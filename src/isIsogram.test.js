'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  test(`should return boolean`, () => {
    const result = isIsogram('playground');

    expect(typeof result).toBe('boolean');
  });

  test(`should return False when input is 'Mumspagetti'`, () => {
    const result = isIsogram('Mumspagetti');

    expect(result).toBeFalsy();
  });

  test(`should return True when input is 'sun'`, () => {
    const result = isIsogram('sun');

    expect(result).toBeTruthy();
  });

  test(`should return False when input is 'sunrise'`, () => {
    const result = isIsogram('sunrise');

    expect(result).toBeFalsy();
  });

  test(`should return True when input is ''`, () => {
    const result = isIsogram('');

    expect(result).toBeTruthy();
  });

  test(`should return True when input is ' '`, () => {
    const result = isIsogram(' ');

    expect(result).toBeTruthy();
  });
});
