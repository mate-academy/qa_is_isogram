// eslint-disable-next-line strict
describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it('should be a function', () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should return true for isograms', () => {
    expect(isIsogram('isogram')).toBe(true);
    expect(isIsogram('Unique')).toBe(false);
    expect(isIsogram('Alphabetic')).toBe(false);
  });

  it('should return false for non-isograms', () => {
    expect(isIsogram('hello')).toBe(false);
    expect(isIsogram('Dermatoglyphics')).toBe(true);
    expect(isIsogram('abbA')).toBe(false);
  });

  it('should handle non-alphabetic characters', () => {
    expect(isIsogram('!@#$%^&*')).toBe(true);
    expect(isIsogram('This, is 4 test!')).toBe(false);
  });
});
