'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram)
      .toBeInstanceOf(Function);
  });

  it(`Should return 'True' for an empty string`, () => {
    const result = isIsogram('');

    expect(result)
      .toBe(true);
  });

  it(`Should return 'True'
  if a string contains only one letter`, () => {
    const result = isIsogram('a');

    expect(result)
      .toBe(true);
  });

  it(`Should return 'True'
  if a string contains two different letters`, () => {
    const result = isIsogram('ax');

    expect(result)
      .toBe(true);
  });

  it(`Should return 'False'
  if a string contains two repeated letters`, () => {
    const result = isIsogram('Potato');

    expect(result)
      .toBe(false);
  });

  it(`Should return 'True'
  if a string doesn't contain repeated letters`, () => {
    const result = isIsogram('playgrounds');

    expect(result)
      .toBe(true);
  });

  it(`Should return 'False' if a string contains one repeated letters`, () => {
    const result = isIsogram('Randomizer');

    expect(result)
      .toBe(false);
  });

  it(`Should return 'False'
  if a string contains two identical letters but in different cases`, () => {
    const result = isIsogram('Bob');

    expect(result)
      .toBe(false);
  });

  it(`Should return 'True'
  if a string contains all distinct letters of English alphabet`, () => {
    const result = isIsogram('ABCDEFGHIJKLMNOPQRSTUVWXYZ');

    expect(result)
      .toBe(true);
  });
});
