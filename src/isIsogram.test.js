'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  test('should be false', () => {
    expect(isIsogram('oblivion'))
      .toBeFalsy();
  });

  test('should be true', () => {
    expect(isIsogram(''))
      .toBeTruthy();
  });

  test('should be true', () => {
    expect(isIsogram('rainbow'))
      .toBeTruthy();
  });

  test('should be false', () => {
    expect(isIsogram('Sushi'))
      .toBeFalsy();
  });
});
