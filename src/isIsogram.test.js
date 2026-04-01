'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`'word' = ''`, () => {
    const result = isIsogram('');

    expect(result).toBeTruthy();
  });

  it('word is isogram', () => {
    const result = isIsogram('playgrounds');

    expect(result).toBeTruthy();
  });

  it(`word isn't isogram`, () => {
    const result = isIsogram('look');

    expect(result).toBeFalsy();
  });

  it(`word is isogram and the word has a different case`, () => {
    const result = isIsogram('Playgrounds');

    expect(result).toBeTruthy();
  });

  it(`word isn't isogram and the word has a different case`, () => {
    const result = isIsogram('Adam');

    expect(result).toBeFalsy();
  });
});
