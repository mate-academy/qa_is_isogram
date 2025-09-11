'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should be 'true' if a string is empty`, () => {
    const result = isIsogram('');

    expect(result).toBe(true);
  });

  it(`should return 'false' if a word has repeatable letters`, () => {
    const result = isIsogram('look');

    expect(result).toBe(false);
  });

  it(`should return 'true' if a word hasn't repeatable letters`, () => {
    const result = isIsogram('Kate');

    expect(result).toBe(true);
  });

  it('should ignore register', () => {
    const result = isIsogram('Adam');

    expect(result).toBe(false);
  });
});
