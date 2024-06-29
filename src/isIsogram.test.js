'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it(`should be true if input is empty string`, () => {
    expect(isIsogram('')).toBe(true);
  });

  // eslint-disable-next-line max-len
  it(`should be false if the input contains an uppercase and lowercase letter `, () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it(`should be true if the input contains uppercase letters`, () => {
    expect(isIsogram('SMITH')).toBe(true);
  });

  it('should be true if input is a single letter', () => {
    expect(isIsogram('a')).toBe(true);
  });

  it('should be true if input has all unique letters', () => {
    expect(isIsogram('isogram')).toBe(true);
  });

  it('should be false if input has repeating letters', () => {
    expect(isIsogram('letter')).toBe(false);
  });

  it('should be true if input has mixed case letters and all unique', () => {
    expect(isIsogram('Dermatoglyphics')).toBe(true);
  });
});
