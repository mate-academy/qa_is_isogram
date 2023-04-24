'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`True with 'isog'`, () => {
    expect(isIsogram('isog'))
      .toBeTruthy();
  });

  it(`False with 'isogg'`, () => {
    expect(isIsogram('isogg'))
      .toBeFalsy();
  });

  it(`takes only letters'`, () => {
    expect(() => {
      isIsogram(777);
    })
      .toThrow();
  });

  it(`Empty string equal "isogram"`, () => {
    expect(isIsogram(''))
      .toBeTruthy();
  });

  it(`case-insensitive"`, () => {
    expect(isIsogram('Mm'))
      .toBeFalsy();
  });
});
