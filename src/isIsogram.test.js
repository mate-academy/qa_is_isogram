'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should be true if word is empty`, () => {
    expect(isIsogram('')).toBeTruthy();
  });

  it(`should be true
      if word contains non-repeating letters`, () => {
    expect(isIsogram('Exam')).toBeTruthy();
  });

  it(`should be false
      if word contains repeating letters
        in different cases`, () => {
    expect(isIsogram('Ilike')).toBeFalsy();
  });

  it(`should be false
      if word contains repeating letters
        in the same case`, () => {
    expect(isIsogram('ilike')).toBeFalsy();
  });
});
