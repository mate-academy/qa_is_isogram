'use strict';

describe(`Function 'isIsogram':`, () => {
  const isIsogram = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return a boolean`, () => {
    expect(typeof isIsogram('lp')).toBe('boolean');
  });

  it(`should not be case sensitive`, () => {
    expect(isIsogram('mAlan')).toBe(false);
  });

  it(`should return 'true' if string is blank`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`should return 'false' if string is not isogram 
  and the repeating letters are arranged in a row`, () => {
    expect(isIsogram('bluue')).toBe(false);
  });

  it(`should return 'false' if string is not isogram 
  and the repeating letters are not arranged in a row`, () => {
    expect(isIsogram('blueu')).toBe(false);
  });

  it(`should return 'true' if string is isogram`, () => {
    expect(isIsogram('asdfg')).toBe(true);
  });
});
