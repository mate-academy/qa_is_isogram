'use strict';

// describe('isIsogram', () => {
//   const { isIsogram } = require('./isIsogram');

//   it(`should be declared`, () => {
//     expect(isIsogram).toBeInstanceOf(Function);
//   });

//   it(`should return true if empty string input`, () => {
//     expect(isIsogram('')).toBe(true);
//   });
// });

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it('Should be declared', () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('Should return true if empty string input', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('Should return true if word is isogram', () => {
    expect(isIsogram('broad')).toBe(true);
  });

  it(`Should return false if two identical`
    + `letters have different registers.`, () => {
    expect(isIsogram('Oo')).toBe(false);
  });

  it(`Should return false if the same letters`
    + `in a row in tha same register`, () => {
    expect(isIsogram('aa')).toBe(false);
  });

  it('Should return false if the same letters are not in a row', () => {
    expect(isIsogram('ono')).toBe(false);
  });
});
