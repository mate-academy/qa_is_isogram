'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`the empty string should be an isogram`, () => {
    expect(isIsogram(' '))
      .toBeTruthy();
  });

  it(`the 'playgrounds' string should be an isogram`, () => {
    expect(isIsogram('playgrounds'))
      .toBeTruthy();
  });

  it(`the 'Sun' string should be an isogram`, () => {
    expect(isIsogram('playgrounds'))
      .toBeTruthy();
  });

  it(`the 'aPple' string shouldn't  be an isogram`, () => {
    expect(isIsogram('aPple'))
      .toBeFalsy();
  });

  it(`the 'Madam' string shouldn't  be an isogram`, () => {
    expect(isIsogram('aPple'))
      .toBeFalsy();
  });

  it(`the 'moon' string shouldn't  be an isogram`, () => {
    expect(isIsogram('aPple'))
      .toBeFalsy();
  });
});
