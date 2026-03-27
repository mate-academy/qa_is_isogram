'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it('declared', () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('empty string is isogram', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('all lowercase is isogram', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it('consecutive repeat is not isogram', () => {
    expect(isIsogram('look')).toBe(false);
  });

  it('non-consecutive repeat is not isogram', () => {
    expect(isIsogram('Adam')).toBe(false);
  });

  it('case-insensitive repeat is not isogram', () => {
    expect(isIsogram('Oops')).toBe(false);
  });

  it('mixed case valid isogram', () => {
    expect(isIsogram('Dermatoglyphics')).toBe(true);
  });

  it('mixed case invalid isogram', () => {
    expect(isIsogram('Abba')).toBe(false);
  });
});
