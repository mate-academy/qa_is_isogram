'use strict';

describe('isIsogram', () => {
const { isIsogram } = require('./isIsogram');

it(`should be declared`, () => {
expect(isIsogram).toBeInstanceOf(Function);
});

it(`should return true when string contain word that has no repeating letters`, () => {
expect(isIsogram('youare')).toBe(true);
});

it(`should return false when string contain word that has no repeating consecutive letters`, () => {
expect(isIsogram('hello')).toBe(false);
});

it(`should return false when string contain word that has no repeating non-consecutive letters`, () => {
expect(isIsogram('couch')).toBe(false);
});

it(`should return true when string is empty`, () => {
expect(isIsogram('')).toBe(true);
});

it(`should return true when string is empty`, () => {
expect(isIsogram('')).toBe(true);
});

it(`should return true when string containe words in upper and lower cases`, () => {
expect(isIsogram('JaimeLnstr')).toBe(true);
});

it(`should return true when string containe alfanumeric symbols`, () => {
expect(isIsogram('1sword2kng')).toBe(true);
});

it(`should return true when string containe only one letter`, () => {
expect(isIsogram('w')).toBe(true);
});

it(`should return false when string containe repeated letters on Upper and Lower cases`, () => {
expect(isIsogram('ArthurDayne')).toBe(false);
});

it(`should return false when string containe repeated alfanumeric characters on Upper and Lower cases`, () => {
  expect(isIsogram('M0rsmodre')).toBe(false);
  });

});
