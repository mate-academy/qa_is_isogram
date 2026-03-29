'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should be return  true for (playgrounds) ', () => {
    expect(isIsogram('playgrounds'))
      .toBe(true);
  });

  it('should be return  false for (look) ', () => {
    expect(isIsogram('look'))
      .toBe(false);
  });

  it('should be return  false for (Adam) ', () => {
    expect(isIsogram('Adam'))
      .toBe(false);
  });

  it('should be return  true for empty string', () => {
    expect(isIsogram(''))
      .toBe(true);
  });

  it('should be return  false for (Oops) ', () => {
    expect(isIsogram('Oops'))
      .toBe(false);
  });
});
