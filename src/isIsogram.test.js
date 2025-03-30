'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return true if input is ''`, () => {
    expect(isIsogram('')).toEqual(true);
  });

  it(`should return true if input is ' '`, () => {
    expect(isIsogram(' ')).toEqual(true);
  });

  it(`should return true if input is 'ab'`, () => {
    expect(isIsogram('ab')).toEqual(true);
  });

  it(`should return true if input is 'republic'`, () => {
    expect(isIsogram('republic')).toEqual(true);
  });

  it(`should return false if input is '  '`, () => {
    expect(isIsogram('  ')).toEqual(false);
  });

  it(`should return false if input is 'aa'`, () => {
    expect(isIsogram('aa')).toEqual(false);
  });

  it(`should return false if input is 'aaa'`, () => {
    expect(isIsogram('aaa')).toEqual(false);
  });

  it(`should return false if input is 'rr'`, () => {
    expect(isIsogram('rr')).toEqual(false);
  });

  it(`should return false if input is 'Alabama'`, () => {
    expect(isIsogram('Alabama')).toEqual(false);
  });

  it(`should ignore register and return false if input is 'Aa'`, () => {
    expect(isIsogram('Aa')).toEqual(false);
  });

  it(`should ignore register and return false if input is 'yY'`, () => {
    expect(isIsogram('yY')).toEqual(false);
  });
});
