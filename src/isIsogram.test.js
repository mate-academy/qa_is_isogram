'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it('should be declared', () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`empty string should return 'true'`, () => {
    const result = isIsogram('');

    expect(result).toEqual(true);
  });

  it(`string 'playgrounds' should give 'true'`, () => {
    const result = isIsogram('playgrounds');

    expect(result).toEqual(true);
  });

  it(`string 'look' should give 'false'`, () => {
    const result = isIsogram('look');

    expect(result).toEqual(false);
  });

  it(`string 'Adam' should give 'false'`, () => {
    const result = isIsogram('Adam');

    expect(result).toEqual(false);
  });

  it(`string 'Oops' should give 'false'`, () => {
    const result = isIsogram('Oops');

    expect(result).toEqual(false);
  });

  it(`argument with null or undefined should throw an error`, () => {
    expect(() => isIsogram(null)).toThrow();
    expect(() => isIsogram(undefined)).toThrow();
  });
});
