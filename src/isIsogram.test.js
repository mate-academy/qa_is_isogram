'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it('should be declared', () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('returns true for word with all unique letters: "playgrounds"', () => {
    expect(
      isIsogram('playgrounds')
    ).toBe(true);
  });

  it('returns false for word with repeated letters: "look"', () => {
    expect(
      isIsogram('look')
    ).toBe(false);
  });

  it('returns false when repeated letters differ only in case: "Adam"', () => {
    expect(
      isIsogram('Adam')
    ).toBe(false);
  });

  it('returns true for empty string', () => {
    expect(
      isIsogram('')
    ).toBe(true);
  });

  it(
    'returns false when repeated letters differ only in case: "Adam"',
    () => {
      expect(
        isIsogram('Oops')
      ).toBe(false);
    });

  it('returns true for single-letter string: "A"', () => {
    expect(
      isIsogram('A')
    ).toBe(true);
  });

  it('returns true for two unique letters: "Ab"', () => {
    expect(
      isIsogram('Ab')
    ).toBe(true);
  });

  it('returns false for repeated letters: "aaaaa"', () => {
    expect(
      isIsogram('aaaaa')
    ).toBe(false);
  });

  it(
    'returns false for long word with repeats: "backgroundsbackgrounds"',
    () => {
      expect(
        isIsogram('backgroundsbackgrounds')
      ).toBe(false);
    });

  it('returns true for all letters of alphabet once', () => {
    expect(
      isIsogram('abcdefghijklmnopqrstuvwxyz')
    ).toBe(true);
  });
});
