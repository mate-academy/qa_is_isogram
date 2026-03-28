'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('if "playgrounds" return TRUE', () => {
    expect(isIsogram('playgrounds')).toBeTruthy();
  });

  it('if "look" return FALSE', () => {
    expect(isIsogram('look')).toBeFalsy();
  });

  it('should be case-insensitive, if "Adam" return FALSE', () => {
    expect(isIsogram('Adam')).toBeFalsy();
  });

  it('if empty string return TRUE', () => {
    expect(isIsogram('')).toBeTruthy();
  });
});
