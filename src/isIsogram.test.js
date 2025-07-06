'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });
   it(`should return true for 'false' as a valid isogram`, () => {
    expect(isIsogram('false')).toBe(true);
  });
  it(`should return false for 'MUM' because of repeated letters`, () => {
    expect(isIsogram('MUM')).toBe(false);
  });
  it(`should return false for multiple spaces`, () => {
    expect(isIsogram('  ')).toBe(false);
  });
  it(`should return true for a single space`, () => {
    expect(isIsogram(' ')).toBe(true);
  });
});
