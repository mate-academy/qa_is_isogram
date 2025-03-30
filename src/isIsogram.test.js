'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it('should be declared', () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  test('word is isogram & consisted of Lower&UpperCases', () => {
    const resut = isIsogram('AdEmuWF');

    expect(resut).toBe(true);
  });

  test('word is not isogram & consisted of Lower&UpperCases', () => {
    const resut = isIsogram('AdEmuWead');

    expect(resut).toBe(false);
  });

  test('should return true if entered string is empty', () => {
    const resut = isIsogram('');

    expect(resut).toBe(true);
  });

  test('word is isogram', () => {
    const resut = isIsogram('spider');

    expect(resut).toBe(true);
  });

  test('word is not isogram & consisted of letters non-consecutives'
    , () => {
      const resut = isIsogram('abracadabra');

      expect(resut).toBe(false);
    });

  test('word is not isogram & consisted of letters consecutives', () => {
    const resut = isIsogram('uuuuuuuuurrrrrrraaaaa');

    expect(resut).toBe(false);
  });
});
