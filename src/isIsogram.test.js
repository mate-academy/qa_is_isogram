'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`empty string is an isogram`, () => {
    expect(isIsogram(''))
      .toBe(true);
  });

  it(`is isogram`, () => {
    expect(isIsogram('isogram'))
      .toBe(true);
  });

  it(`function is not sensative to case`, () => {
    expect(isIsogram('Barber'))
      .toBe(false);
  });

  it(`string should not contain same letters`, () => {
    expect(isIsogram('barber'))
      .toBe(false);
  });
});
