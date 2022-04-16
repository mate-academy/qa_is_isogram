'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should return boolean`, () => {
    const result = typeof (isIsogram('Ff'));

    expect(result)
      .toBe('boolean');
  });

  it(`should return true when string empty`, () => {
    const result = isIsogram('');

    expect(result)
      .toBe(true);
  });

  it(`should return true when no repeating letters`, () => {
    const result = isIsogram('playgrounds');

    expect(result)
      .toBe(true);
  });

  it(`should return false when letters is repeat`, () => {
    const result = isIsogram('look');

    expect(result)
      .toBe(false);
  });

  it(`should return false when repeating in different registers`, () => {
    const result = isIsogram('Adam');

    expect(result)
      .toBe(false);
  });
});
