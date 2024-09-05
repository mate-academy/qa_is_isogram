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

});
