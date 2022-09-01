'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram)
      .toBeInstanceOf(Function);
  });

  it(`Should return "True" for an empty string`, () => {
    const result = isIsogram('');

    expect(result)
      .toBe(true);
  });

  it(`Should return "True" for the 'a' string`, () => {
    const result = isIsogram('a');

    expect(result)
      .toBe(true);
  });

  it(`Should return "True" for the 'aX' string`, () => {
    const result = isIsogram('aX');

    expect(result)
      .toBe(true);
  });

  it(`Should return "False" for the 'Potato' string`, () => {
    const result = isIsogram('Potato');

    expect(result)
      .toBe(false);
  });

  it(`Should return "True" for the 'playgrounds' string`, () => {
    const result = isIsogram('playgrounds');

    expect(result)
      .toBe(true);
  });

  it(`Should return "False" for the 'Randomizer' string`, () => {
    const result = isIsogram('Randomizer');

    expect(result)
      .toBe(false);
  });

  it(`Should return "False" for the 'loops' string`, () => {
    const result = isIsogram('loops');

    expect(result)
      .toBe(false);
  });

  it(`Should return "Bob" for the 'loops' string`, () => {
    const result = isIsogram('Bob');

    expect(result)
      .toBe(false);
  });
});
