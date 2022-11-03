'use strict';

const { isIsogram } = require('./isIsogram');

describe('is declared', () => {
  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });
});

describe('return correct boolean value', () => {
  it('should return true if word is empty string', function() {
    const result = isIsogram('');

    expect(result).toBeTruthy();
  });

  it('should return true if word contains only one character', function() {
    const result = isIsogram('t');

    expect(result).toBeTruthy();
  });

  it('should return true if word is isogram', function() {
    const result = isIsogram('string');

    expect(result).toBeTruthy();
  });

  it('should return false if word is not isogram', function() {
    const result = isIsogram('test');

    expect(result).toBeFalsy();
  });

  it('should return true if word is isogram and include space', function() {
    const result = isIsogram('abc def');

    expect(result).toBeTruthy();
  });

  it('should return false if word is not isogram'
    + 'and includes multiple spaces', function() {
    const result = isIsogram('a b c d e f');

    expect(result).toBeFalsy();
  });

  it('should return true if word is isogram and include number', function() {
    const result = isIsogram('string1');

    expect(result).toBeTruthy();
  });

  it('should return false if word is not isogram'
    + 'and includes multiple numbers', function() {
    const result = isIsogram('11string11');

    expect(result).toBeFalsy();
  });

  it('should return true if word is isogram'
    + 'and include special character', function() {
    const result = isIsogram('string@');

    expect(result).toBeTruthy();
  });

  it('should return false if word is not isogram'
    + 'and includes multiple special characters', function() {
    const result = isIsogram('!!string@#$!@');

    expect(result).toBeFalsy();
  });

  it('should be case-insensitive', function() {
    const result = isIsogram('iSOGram');

    expect(result).toBeTruthy();
  });

  it('should be case-insensitive', function() {
    const result = isIsogram('DiFferEnt woRds');

    expect(result).toBeFalsy();
  });
});
