'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram)
      .toBeInstanceOf(Function);
  });

  it(`An empty string is an isogram`, () => {
    const result = isIsogram('');

    expect(result)
      .toBe(true);
  });

  it(`The 'a' is an isogram`, () => {
    const result = isIsogram('a');

    expect(result)
      .toBe(true);
  });

  it(`The 'Ax' is an isogram`, () => {
    const result = isIsogram('aX');

    expect(result)
      .toBe(true);
  });

  it(`The 'Potato' is not an isogram`, () => {
    const result = isIsogram('Potato');

    expect(result)
      .toBe(false);
  });

  it(`The 'playgrounds' is an isogram`, () => {
    const result = isIsogram('playgrounds');

    expect(result)
      .toBe(true);
  });

  it(`The 'Randomizer' is not an isogram`, () => {
    const result = isIsogram('Randomizer');

    expect(result)
      .toBe(false);
  });

  it(`The 'loops' is not an isogram`, () => {
    const result = isIsogram('loops');

    expect(result)
      .toBe(false);
  });

  it(`The 'Bob' is not an isogram`, () => {
    const result = isIsogram('Bob');

    expect(result)
      .toBe(false);
  });
});
