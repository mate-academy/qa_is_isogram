'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');
  const cases = [
    {
      case: 'playgrounds', expect: true,
    },
    {
      case: 'look', expect: false,
    },
    {
      case: 'Adam', expect: false,
    },
  ];

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should ignore case`, () => {
    expect(isIsogram('ABa')).toBe(false);
  });

  it(`should return true if 'word' is empty`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it.each(cases)('should work correctly with \'word\' === %s', (testCase) => {
    expect(isIsogram(testCase.case)).toBe(testCase.expect);
  });
});
