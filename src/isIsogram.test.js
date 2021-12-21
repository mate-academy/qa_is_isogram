'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return true if word is empty`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`should return true if word hasn't the same letters, like "above"`, () => {
    expect(isIsogram('above')).toBe(true);
  });

  it(`should return false if word has the same letters, like "baby"`, () => {
    expect(isIsogram('baby')).toBe(false);
  });

  it(`should return false if the word has the same letters'
  + 'in different registers, like "Adam"`, () => {
    expect(isIsogram('Adam')).toBe(false);
  });
});
