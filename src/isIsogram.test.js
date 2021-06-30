'use strict';

describe(`Function 'isIsogram':`, () => {
  const isIsogram = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return a boolean`, () => {
    expect(typeof isIsogram('')).toBe('boolean');
  });

  it(`should not be case sensitive`, () => {
    expect(isIsogram('Alarm')).toBe(false);
  });

  it(`should return 'true' if the string is empty`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`must return 'true' if the characters of value are unique`, () => {
    expect(isIsogram('Desktop')).toBe(true);
  });

  it(`must return 'false' if the characters of value are not unique`, () => {
    expect(isIsogram('deep')).toBe(false);
  });

  it(`must return 'false' if the value dublicate by a space`, () => {
    expect(isIsogram('Desktop Desktop')).toBe(false);
  });

  it(`must return 'true' if the is only one characters of value`, () => {
    expect(isIsogram('g')).toBe(true);
  });
});
