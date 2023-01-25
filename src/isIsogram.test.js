'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return true, if word is isogram`, () => {
    const result = isIsogram('asdfh');

    expect(result).toBe(true);
  });

  it(`should return false, if word is not isogram`, () => {
    const result = isIsogram('dfaa');

    expect(result).toBe(false);
  });

  it(`should ignore case-sensitive`, () => {
    const result = isIsogram('Academy');

    expect(result).toBe(false);
  });

  it(`should return true, if word is empty`, () => {
    const result = isIsogram('');

    expect(result).toBe(true);
  });
});
