'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it('should be declared', () => {
    expect(isIsogram)
      .toBeInstanceOf(Function);
  });

  it(
    'should return true for the word which is isIogram',
    () => {
      expect(isIsogram('word'))
        .toEqual(true);
    }
  );

  it(
    'should return false for the word with repeated letters',
    () => {
      expect(isIsogram('posibble'))
        .toEqual(false);
    }
  );

  it(
    'should return false for the long word, e.g. Transitions',
    () => {
      expect(isIsogram('Transitions'))
        .toEqual(false);
    }
  );  

  it(
    'should return true for the empty string',
    () => {
      expect(isIsogram(''))
        .toEqual(true);
    }
  );

  it(
    'should return false for the word with uppercase letters',
    () => {
      expect(isIsogram('Adam')).toBe(false);
    }
  )
});
