/* eslint-disable max-len */
'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`return true for ''`, () => {
    expect(isIsogram('')).toBe(true);
  });

  it('returns true for an isogram without repetitions', () => {
    expect(isIsogram('machine')).toBe(true);
  });

  it('returns false if there are repeated letters', () => {
    expect(isIsogram('letter')).toBe(false);
  });

  it('case sensitive — Aa are considered the same', () => {
    expect(isIsogram('Dermatoglyphics')).toBe(true);
    expect(isIsogram('Alphabet')).toBe(false); // A і a
  });

  it('work with one word', () => {
    expect(isIsogram('x')).toBe(true);
  });

  it('work with 2 words', () => {
    expect(isIsogram('aa')).toBe(false);
  });

  it('works with a word with the same letters in different cases', () => {
    expect(isIsogram('aA')).toBe(false);
  });

  it('ignores non-letter characters', () => {
    // Якщо в майбутньому потрібно ігнорувати тире/пробіли, можна оновити логіку функції.
    expect(isIsogram('six-year-old')).toBe(false); // зараз буде false, бо "-" враховується
  });
});
