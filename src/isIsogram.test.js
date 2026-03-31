'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it('should be declared', () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  test('return true if entered string has no repeatings and consists of Lower&UpperCases', () => {
    expect(isIsogram('Playgrounds')).toBe(true);
  });

  test('return false if entered string has repeatings and consists of Lower&UpperCases', () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  test('return false if entered string has repeatings and consists of LowerCases', () => {
    expect(isIsogram('look')).toBe(false);
  });

  test(`return true if entered string is empty`, () => {
    expect(isIsogram(' ')).toBe(true);
  });

  test(`return false if entered string has repeating and consits of non-consecutive letters`, () => {
    expect(isIsogram('cucaracha')).toBe(false);
  });

  test(`return false if entered string has"
    + "repeating and consits of consecutive letters`, () => {
    expect(isIsogram('Harry Potter')).toBe(false);
  });

});
