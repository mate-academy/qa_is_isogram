'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  test(`Function should return true if string is empty`, () => {
    expect(isIsogram(''))
      .toEqual(true);
  });

  test(`Function should return true if string
  has no repeating chars(qwertyuiop)`, () => {
    expect(isIsogram('qwertyuiop'))
      .toEqual(true);
  });

  test(`Function should return true if string
  has uppercase chars (Qwertyuiop)`, () => {
    expect(isIsogram('Qwertyuiop'))
      .toEqual(true);
  });

  test(`Function should return false if string
  has repeating chars (qqwertyuiop)`, () => {
    expect(isIsogram('qqwertyuiop'))
      .toEqual(false);
  });

  test(`Function should return false if string
  has repeating chars in different cases (qQwertyuiop)`, () => {
    expect(isIsogram('qqwertyuiop'))
      .toEqual(false);
  });
});
