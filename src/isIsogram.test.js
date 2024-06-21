'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should be returned true for ''`, () => {
    expect(isIsogram('playground'))
      .toBe(true);
  });

  it(`should be returned true for 'MATE'`, () => {
    expect(isIsogram('MATE'))
      .toBe(true);
  });

  it(`should be returned true for 'QAmentor'`, () => {
    expect(isIsogram('QAmentor'))
      .toBe(true);
  });

  it(`should be returned false for 'isolation'`, () => {
    expect(isIsogram('isolation'))
      .toBe(false);
  });

  it(`should be returned false for 'Obviously'`, () => {
    expect(isIsogram('Obviously'))
      .toBe(false);
  });

  it(`should be returned false for 'aaaaa'`, () => {
    expect(isIsogram('aaaaa'))
      .toBe(false);
  });
});
