'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  test('Is empty str Isogram, should return true', () => {
    expect(isIsogram('')).toEqual(true);
  });

  test('Is Amq str Isogram, should return true', () => {
    expect(isIsogram('Amq')).toEqual(true);
  });

  test('Is Aqas str Isogram, should return false', () => {
    expect(isIsogram('Aqas')).toEqual(false);
  });

  test('Is Am q str Isogram, should return true', () => {
    expect(isIsogram('Am q')).toEqual(true);
  });

  test('Is AMQ str Isogram, should return true', () => {
    expect(isIsogram('AMQ')).toEqual(true);
  });

  test('Is \'a m q\' str Isogram, should return false', () => {
    expect(isIsogram('a m q')).toEqual(false);
  });

  test('Is a1qs str Isogram, should return true', () => {
    expect(isIsogram('a1qs')).toEqual(true);
  });

  test('Is a1q1s str Isogram, should return false', () => {
    expect(isIsogram('a1q1s')).toEqual(false);
  });
});
