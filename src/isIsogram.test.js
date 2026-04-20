'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should be isogam`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it(`should be unique word`, () => {
    expect(isIsogram('apple')).toBe(false);
  });

  it(`should be isogam`, () => {
    expect(isIsogram('Aplle')).toBe(false);
  });

  it(`should be isogam`, () => {
    expect(isIsogram('GREY')).toBe(true);
  });

  it(`should be isogam`, () => {
    expect(isIsogram('grey')).toBe(true);
  });
});
