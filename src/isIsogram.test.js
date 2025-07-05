'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should be true for isogram`, () => {
    const word = 'playgrounds';

    const result = isIsogram(word);

    expect(result).toBe(true);
  });


  it(`should be false for double letters`, () => {
    const word = 'look';

    const result = isIsogram(word);

    expect(result).toBe(false);
  });


  it(`should be false for two same letters`, () => {
    const word = 'Adam';

    const result = isIsogram(word);

    expect(result).toBe(false);
  });


  it(`should be true for empty string`, () => {
    const word = '';

    const result = isIsogram(word);

    expect(result).toBe(true);
  });



});
