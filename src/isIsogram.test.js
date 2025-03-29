'use strict';

const { isIsogram } = require('./isIsogram');

describe('isIsogram', () => {
  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });
});

describe('isIsogram', () => {
  test(`should return 'true' when word is 'playgrounds'`, () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });
});

describe('isIsogram', () => {
  test(`should return 'false' when word is 'look'`, () => {
    expect(isIsogram('look')).toBe(false);
  });
});

describe('isIsogram', () => {
  test(`should return 'false' when word is 'Adam'`, () => {
    expect(isIsogram('Adam')).toBe(false);
  });
});

describe('isIsogram', () => {
  test(`should return 'true' when word is empty string`, () => {
    expect(isIsogram('')).toBe(true);
  });
});
