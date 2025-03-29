'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for empty string', () => {
    expect(isIsogram('')).toBe(true);
});

it('should return true when to enter a word with no repeated letters ', () => {
  expect(isIsogram('background')).toBe(true);
});

it('should return false when to enter a word with repeated letters ', () => {
  expect(isIsogram('room')).toBe(false);
});

it('should return false when to enter a word with one capital letter and repeated letters ', () => {
  expect(isIsogram('Array')).toBe(false);
});

it('should return true when to enter a word with one capital letter and no repeated letters ', () => {
  expect(isIsogram('Drank')).toBe(true);
});

});
