'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should return a boolean`, () => {
    expect(() => {
      isIsogram('').toBeInstanceOf(Boolean);
    });
  });

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should work if param is empty string', () => {
    expect(isIsogram('')).toEqual(true);
  });

  it('should work if param is space', () => {
    expect(isIsogram(' ')).toEqual(true);
  });

  it('true for isogram string', () => {
    expect(isIsogram('deponia')).toEqual(true);
  });

  it('true if contains upper case letters', () => {
    expect(isIsogram('SCRIPT')).toEqual(true);
  });

  it('false if contains number', () => {
    expect(isIsogram('154n890')).toEqual(false);
  });

  it('false if contains space inside', () => {
    expect(isIsogram('to live')).toEqual(false);
  });

  it('false if param has symbols', () => {
    expect(isIsogram('to//live')).toEqual(false);
  });
});
