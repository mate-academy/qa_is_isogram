'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('works with empty line', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('works with one letter', () => {
    expect(isIsogram('d')).toBe(true);
  });

  it('return "false" if input="Dad"', () => {
    expect(isIsogram('Dad')).toBe(false);
  });

  it('return "true" if different case', () => {
    expect(isIsogram('qWeRtY')).toBe(true);
  });

  it('return "true" if input="uncopyrightable"', () => {
    expect(isIsogram('uncopyrightable')).toBe(true);
  });

  it('return "false" if input="uncopyrightable u"', () => {
    expect(isIsogram('uncopyrightable u')).toBe(false);
  });
});
